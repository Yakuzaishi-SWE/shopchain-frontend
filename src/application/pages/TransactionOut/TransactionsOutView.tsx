import { observer } from "mobx-react-lite";
import React from "react";
import TransactionListController from "./TransactionList/TransactionListController";

export default observer(function TransactionOutView() {
    return <><div className="content-card">
        <h1 className="center">Your Transactions</h1>
        <TransactionListController />
    </div></>;
});