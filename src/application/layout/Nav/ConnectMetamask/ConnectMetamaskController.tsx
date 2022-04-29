import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import ConnectMetamaskView from "./ConnectMetamaskView";
import ConnectMetamaskViewModel from "./ConnectMetamaskViewModel";
import {useConnect} from "hooks";
import { providerStore } from "core/provider/store/ProviderStore";

export default observer(function ConnectMetamask() {
    const vm = useViewModel(ConnectMetamaskViewModel, providerStore);
    const connect = useConnect();

    return <ConnectMetamaskView
        onClick={connect}
    />;
})