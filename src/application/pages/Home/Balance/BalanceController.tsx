import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";
import BalanceView from "./BalanceView";
import BalanceViewModel from "./BalanceViewModel";


export default observer(function BalanceController() {
    const vm = useViewModel(BalanceViewModel, RootStore.getInstance());

    return <BalanceView
        balanceWEI={vm.balanceWEI}
        isBusy={vm.isBusy}
        balanceFTM={vm.balanceFTM}
    />;
});