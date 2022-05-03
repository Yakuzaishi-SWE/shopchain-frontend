import React from "react";
import TransactionListController from "./TransactionList/TransactionListController";

const TransactionsOutPage = () => {
    return <>
        {/* <h1>Your Locked Transactions</h1> */}
        <TransactionListController  />

        {/* <h1>Your Unlocked Transactions</h1> */}
        {/* <TransactionListController  /> */}
    </>;
};


export default TransactionsOutPage;