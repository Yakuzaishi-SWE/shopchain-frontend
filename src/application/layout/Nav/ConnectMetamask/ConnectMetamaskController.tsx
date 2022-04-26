import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import ConnectMetamaskView from "./ConnectMetamaskView";
import ConnectMetamaskViewModel from "./ConnectMetamaskViewModel";
import {useConnect} from "hooks";

export default observer(function OrderCount() {
    const vm = useViewModel(ConnectMetamaskViewModel, RootStore.getInstance());
    const connect = useConnect();

    return <ConnectMetamaskView
        onClick={connect}
    />;
})