import TransactionListController from "controllers/TransactionList";
import React from "react";


export default function TransactionsInPage() {
    return <>
        <h1>Inbound transactions</h1>
        <TransactionListController from={"seller"} />
    </>;
};

