import { observer } from "mobx-react-lite";
import React from "react";
import TransactionListController from "./TransactionList/TransactionListController";

export default observer(function TransactionInView() {
    return <><div className="content-card">
        <h1 className="center">Inbound transactions</h1>
        <TransactionListController />
    </div></>;
});  