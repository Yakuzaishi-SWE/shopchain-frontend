import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";
import MoneyBoxCountView from "./MoneyBoxCountView";
import MoneyBoxCountViewModel from "./MoneyBoxCountViewModel";


export default observer(function MoneyBoxCountController() {
    const vm = useViewModel(MoneyBoxCountViewModel, RootStore.getInstance());

    return <MoneyBoxCountView
        count={vm.count}
        isBusy={vm.isBusy}
    />;
});