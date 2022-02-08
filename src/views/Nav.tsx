import ConnectMetamaskController from "controllers/ConnectMetamask";
import React from "react";
import Emojis from '../emojis.json';

const EmojiAddress = (address: string) => {
    if (typeof address !== "string") return address;
    let s = address.substring(2).split('');
    let out = "";
    for (let i = 0; i + 1 < s.length; i += 2) {
        let hex = `${s[i]}${s[i + 1]}`
        let pos = parseInt(hex, 16);
        out += String.fromCodePoint(["0x"+Emojis[pos]] as unknown as number);
    }
    return out;
}


const Nav = ({ address }: { address?: string }) => {
    return <header>
        <a href="/">Shopchain</a>
        {
            (!address)
                ?
                <ConnectMetamaskController />
                :
                <span>{EmojiAddress(address) || ""}</span>

        }
    </header>
}

export default Nav;