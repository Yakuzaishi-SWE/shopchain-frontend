import Order from "core/modules/order/domain/Order";
import { observer } from "mobx-react-lite";
import React from "react";
import TransactionListElView from "./TransactionListElView";



export default observer(function TransactionListElController({ order }:{order: Order}){


    return <TransactionListElView
        isPaid={order.isPaid}
    />
})