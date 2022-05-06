import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";
import OrderBalanceView from "./OrderBalanceView";
import BalanceViewModel from "./OrderBalanceViewModel";


export default observer(function OrderBalanceController() {
    const vm = useViewModel(BalanceViewModel, RootStore.getInstance());

    return <OrderBalanceView
        balanceWEI={vm.balanceWEI}
        isBusy={vm.isBusy}
        balanceFTM={vm.balanceFTM}
    />;
});