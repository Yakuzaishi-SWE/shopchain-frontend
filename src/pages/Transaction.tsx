import { TransactionDetailsController, TransactionInitController } from "controllers";
import { useOrders, useSinglePayment } from "hooks";
import React, { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";


const TransactionPage = () => {
    const location = useLocation();
    const { id } = useParams<{ id: string }>();
    const usp = useMemo(() => new URLSearchParams(location.search), [location.search]);

    return <>
        <h2>Transactions</h2>
        <TransactionInitController id={id} />
        <TransactionDetailsController id={id} />
    </>
}

export default TransactionPage;