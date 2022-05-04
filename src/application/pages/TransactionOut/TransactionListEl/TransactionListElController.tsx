import Order from "core/modules/order/domain/Order";
import { observer } from "mobx-react-lite";
import React from "react";
import TransactionListElView from "./TransactionListElView";
import TransactionListElViewModel from "./TransactionListElViewModel";
import { useViewModel } from "application/utils/useViewModel";

export default observer(function TransactionListElController({ order }: { order: Order }) {
    const vm = useViewModel(TransactionListElViewModel, order);

    return <TransactionListElView
        isPaid={vm.isPaid}
        isUnlocked={vm.isUnlocked}
        isRefunded={vm.isRefunded}
        canPay={vm.canPay}
        canUnlock={vm.canUnlock}
        canRefund={vm.canRefund}
        id={order.id}
        transaction={vm.transaction}
        from={vm.from}
        onUnlock={vm.onUnlock}
        orderType={vm.orderType}
    />;
});