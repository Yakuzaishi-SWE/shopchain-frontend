import { useAddress } from "hooks";
import { useOrders } from "hooks/";
import React from "react";
import { TransactionListView } from "views";
import PageLoaderController from "controllers/PageLoader";

const TransactionListController = () => {
    const address = useAddress();
    const { orders, loading } = useOrders({ buyer: address || undefined });

    return <>
        <TransactionListView transactions={orders} />
        <PageLoaderController loading={loading}/>
    </>
}

export default TransactionListController;