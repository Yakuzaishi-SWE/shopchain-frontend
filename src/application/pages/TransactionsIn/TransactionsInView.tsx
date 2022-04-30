import React from "react";
import TransactionListController from "./TransactionList/TransactionListController";

const TransactionInPage = () => {
    return <>
        <h1>Inbound transactions</h1>
        <TransactionListController from={"seller"} />
    </>;
};


export default TransactionInPage;