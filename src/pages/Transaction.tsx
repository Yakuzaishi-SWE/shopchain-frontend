import { TransactionDetailsController, TransactionInitController, PageLoaderController } from "controllers";
import { useOrders, useSinglePayment } from "hooks";
import React, { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";


const TransactionPage = () => {
    const location = useLocation();
    const { id } = useParams<{ id: string }>();
    const { loading } = useOrders();
    const usp = useMemo(() => new URLSearchParams(location.search), [location.search]);
    
    console.log(loading)
    /*
    if(loading) {
        return <>
                <p>Check your Metamask extension. The payment process may take few seconds ...</p>
                <PageLoaderController loading={loading} />
            </>
    } else
    */
        return (<>
                <h1>Transactions</h1>
                <p>Please choose the payment type that you prefer.<br/>
                If you select “Pay Alone” you will redirect to checkout page and you will pay the entire order amount.<br/>
                If you select Money Box you are going to create an order that you can share with your friends, to confirm 
                the payment you have to fill the entire amount that is request.</p>
            
                <TransactionInitController id={id} />
                <TransactionDetailsController id={id} />
            </>
        );
    
}

export default TransactionPage;