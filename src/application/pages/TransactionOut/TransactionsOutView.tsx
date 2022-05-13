import { observer } from "mobx-react-lite";
import React from "react";
import ContributesListController from "./ContributesList/ContributesListController";
import TransactionListController from "./TransactionList/TransactionListController";

export default observer(function TransactionOutView() {
    return <>
        <div className="page-container">
            <div className="left-col">
                <h1 className="center">Your Transactions</h1>
                <TransactionListController />
            </div>

            <div className="right-col">
                <h1 className="center">Your Contributions</h1>
                <ContributesListController />
            </div>
        </div>
    
    </>;
});