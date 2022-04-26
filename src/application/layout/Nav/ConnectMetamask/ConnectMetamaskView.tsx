import { observer } from "mobx-react-lite";
import React from "react";
import IConnectMetamaskViewModel from "./IConnectMetamaskViewModel";


export default observer(function OrderCountView( {onClick} : IConnectMetamaskViewModel) {
    return <button className="btn-connect" onClick={onClick}>
        Connect Metamask
    </button>;
});