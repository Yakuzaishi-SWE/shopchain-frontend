import { observer } from "mobx-react-lite";
import React from "react";
import IConnectMetamaskViewModel from "./IConnectMetamaskViewModel";


export default observer(function OrderCountView({ connect }: IConnectMetamaskViewModel) {
    return <button className="btn-connect" onClick={connect}>
        Connect MetaMask
    </button>;
});