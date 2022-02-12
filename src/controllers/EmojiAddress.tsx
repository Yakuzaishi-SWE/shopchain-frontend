import Emojis from '../emojis.json';
import React from 'react';
import EmojiAddressView from 'views/EmojiAddress';

const EmojiAddressController = ({ address }: { address: string | null }) => {
    if (typeof address !== "string") return <EmojiAddressView address={"Connect Metamask"}/>;
    let s = address.substring(2).split('');
    const positions: number[] = [];
    for (let i = 0; i + 1 < s.length; i += 2) {
        positions.push(Emojis[parseInt(`${s[i]}${s[i + 1]}`, 16)] as unknown as number);
    }
    return <EmojiAddressView address={String.fromCodePoint(...positions)}/>;
}

export default EmojiAddressController;