import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";
import OrderCountView from "./OrderCountView";
import OrderCountViewModel from "./OrderCountViewModel";


export default observer(function OrderCountController() {
    const vm = useViewModel(OrderCountViewModel, RootStore.getInstance());

    return <OrderCountView
        count={vm.count}
        isBusy={vm.isBusy}
    />;
});