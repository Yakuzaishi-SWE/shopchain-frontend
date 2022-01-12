import ConnectMetamaskController from "controllers/ConnectMetamask";
import React, { useState } from "react";
import { NavView } from "views";
import "./styles/main.scss";

export default () => {
    const [address, setAddress] = useState<string|undefined>("12345");

    return <>
        <NavView address={address}/>
        <ConnectMetamaskController setAccount={setAddress}/>
    </>;
}