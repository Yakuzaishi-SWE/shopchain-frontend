import { observer } from "mobx-react-lite";
//import { EmojiAddressController } from "controllers";
import React from "react";
import IAddressViewModel from "./IAddressViewModel";

interface IAddressViewModel {
    address: string
}

export default observer(function AddressView({ address }: IAddressViewModel) {
    return <span className="addr">
        {/* <EmojiAddressController address={address} /> */}
        <span className="addr-hex">{address}</span>
    </span>;
});