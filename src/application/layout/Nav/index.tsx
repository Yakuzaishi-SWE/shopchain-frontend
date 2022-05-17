import { useViewModel } from "application/utils/useViewModel";
import { providerStore } from "core/provider/store/ProviderStore";
import { observer } from "mobx-react-lite";
import React from "react";
import NavView from "./NavView";
import NavViewModel from "./NavViewModel";



export default observer(function Nav() {
    const vm = useViewModel(NavViewModel, providerStore);

    return <NavView
        address={vm.address}
    />;
});