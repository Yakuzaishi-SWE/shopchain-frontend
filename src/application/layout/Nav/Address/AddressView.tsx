import { observer } from "mobx-react-lite";
//import { EmojiAddressController } from "controllers";
import React, { useEffect, useRef } from "react";
import Emojis from "../../../../emojis.json";

interface IAddressViewModel {
    address: string
}

function EmojiAddress(str: string) {
    const s = str.substring(2).split("");
    const positions: number[] = [];
    for (let i = 0; i + 1 < s.length; i += 2) {
        positions.push(Emojis[parseInt(`${s[i]}${s[i + 1]}`, 16)] as unknown as number);
    }
    return String.fromCodePoint(...positions);
}

export default observer(function AddressView({ address }: IAddressViewModel) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.onmouseover = () => {
                if (ref.current) {
                    ref.current.innerText = address;
                }
            };
            ref.current.onmouseleave = () => {
                if (ref.current) {
                    ref.current.innerText = EmojiAddress(address);
                }
            }
        }
            
    }, []);

    return <span className="addr">
        {/* <EmojiAddressController address={address} /> */}
        <span className="addr-hex" ref={ref}>{EmojiAddress(address)}</span>
    </span>;
});