import { observer } from "mobx-react-lite";
import React from "react";
import TransactionListController from "./TransactionList/TransactionListController";

export default observer(function TransactionInView() {
    return <>
        <h1>Inbound transactions</h1>
        <TransactionListController  />
    </>;
});  