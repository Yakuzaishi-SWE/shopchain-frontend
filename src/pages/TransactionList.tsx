import TransactionListController from "controllers/TransactionList";
import React from "react";


const TransactionListPage = () => {
    let loading = true;

    return <>
        <h1>Transaction List</h1>
        <TransactionListController/>
    </>

}


export default TransactionListPage;