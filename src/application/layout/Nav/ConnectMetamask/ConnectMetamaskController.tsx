import { useViewModel } from "application/utils/useViewModel";
import { providerStore } from "core/provider/store/ProviderStore";
import { observer } from "mobx-react-lite";
import React from "react";
import ConnectMetamaskView from "./ConnectMetamaskView";
import ConnectMetamaskViewModel from "./ConnectMetamaskViewModel";

export default observer(function ConnectMetamask() {
    const vm = useViewModel(ConnectMetamaskViewModel, providerStore);

    return <ConnectMetamaskView
        connect={vm.connect}
    />;
});