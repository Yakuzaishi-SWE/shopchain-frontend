import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";
import MoneyBoxView from "./MoneyBoxBalanceView";
import MoneyBoxViewModel from "./MoneyBoxBalanceViewModel";


export default observer(function MoneyBoxBalanceController() {
    const vm = useViewModel(MoneyBoxViewModel, RootStore.getInstance());

    return <MoneyBoxView
        balanceWEI={vm.balanceWEI}
        isBusy={vm.isBusy}
        balanceFTM={vm.balanceFTM}
    />;
});