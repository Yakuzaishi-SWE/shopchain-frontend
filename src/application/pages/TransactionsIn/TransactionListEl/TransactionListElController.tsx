import Order from "core/modules/order/domain/Order";
import { observer } from "mobx-react-lite";
import React from "react";
import TransactionListElView from "./TransactionListElView";

export default observer(function TransactionListElController({ order }: { order: Order }) {


    return <TransactionListElView
        paid={order.paid}
        unlocked={order.unlocked}
        refunded={order.refunded}
        canPay={order.canPay}
        canUnlock={order.canUnlock}
        canRefund={order.canRefund}
        id={order.id}
    />
})