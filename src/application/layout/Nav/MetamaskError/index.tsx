import { useViewModel } from "application/utils/useViewModel";
import ProviderStore from "core/provider/store/ProviderStore";
import { observer } from "mobx-react-lite";
import React from "react";
import MetamaskErrorView from "./MetamaskErrorView";
import MetamaskErrorViewModel from "./MetamaskErrorViewModel";


export default observer(function MetamaskError() {
    const vm = useViewModel(MetamaskErrorViewModel, ProviderStore.getInstance());

    return <MetamaskErrorView
        description={vm.description}
        name={vm.name}
        severity={vm.severity}
    />;
});