import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { BackArrowIcon } from "resources/svg";
import TransactionListController from "./TransactionList/TransactionListController";

export default observer(function TransactionInView() {
    return <>
        <div className="content-card">
            <h1 className="center">Inbound Transactions</h1>
            <TransactionListController />
        </div>
    </>;
});  