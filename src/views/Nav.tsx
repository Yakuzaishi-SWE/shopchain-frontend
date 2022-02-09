import ConnectMetamaskController from "controllers/ConnectMetamask";
import React from "react";
import Emojis from '../emojis.json';

const EmojiAddress = (address: string) => {
    if (typeof address !== "string") return address;
    let s = address.substring(2).split('');
    const positions: number[] = [];
    for (let i = 0; i + 1 < s.length; i += 2) {
        positions.push(Emojis[parseInt(`${s[i]}${s[i + 1]}`, 16)] as unknown as number);
    }
    return String.fromCodePoint(...positions);
}


const Nav = ({ address }: { address?: string }) => {
    return <header>
        <a href="/">Shopchain</a>
        {
            (!address)
                ?
                <ConnectMetamaskController />
                :
                <span className="addr">
                    <span className="addr-overlay">{EmojiAddress(address)}</span>
                    <span className="addr-hex">{address}</span>
                </span>

        }
    </header>
}

export default Nav;