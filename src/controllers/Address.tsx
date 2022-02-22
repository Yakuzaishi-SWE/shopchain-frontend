import { useAddress } from "hooks";
import React from "react";
import { AddressView } from "views";

const AddressController = () => {
    const address = useAddress();

    return <AddressView address={address} />;
};


export default AddressController;