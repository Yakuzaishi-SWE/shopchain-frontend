import { useAddress } from "hooks";
import { useOrders } from "hooks/";
import React from "react";
import { TransactionListView } from "views";

const TransactionListController = () => {
    const address = useAddress();
    const { orders } = useOrders({ buyer: address || undefined });

    return <TransactionListView transactions={orders} />
}

export default TransactionListController;