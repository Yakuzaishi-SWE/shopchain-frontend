import Order from "core/modules/order/domain/Order";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import TransactionListElView from "./TransactionListElView";
import TransactionListElViewModel from "./TransactionListElViewModel";
import { useViewModel } from "application/utils/useViewModel";

export default observer(function TransactionListElController({ order }: { order: Order }) {
    const vm = useViewModel(TransactionListElViewModel, order);

    return <TransactionListElView
        isPaid={vm.isPaid}
        isUnlocked={vm.isUnlocked}
        isRefunded={vm.isRefunded}
        id={order.id}
        transaction={vm.transaction}
        orderType={vm.orderType}
    />;
});