import { observer } from "mobx-react-lite";
import React from "react";
import TransactionListController from "./TransactionList/TransactionListController";

export default observer(function TransactionOutView() {
    return <>
        <h1>Your Locked Transactions</h1>
        <TransactionListController  />

        <h1>Your Unlocked Transactions</h1>
        <TransactionListController  />
    </>;
});