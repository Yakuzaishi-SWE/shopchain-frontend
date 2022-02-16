import { EmojiAddressController } from "controllers";
import React from "react";

const AddressView = ({ address }: { address: string | null }) => {
    return <span className="addr">
        <EmojiAddressController address={address} />
        <span className="addr-hex">{address}</span>
    </span>;
};

export default AddressView;