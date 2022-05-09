import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { BackArrowIcon } from "resources/svg";
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
                <h1 className="center">Your Contributes</h1>
                <ContributesListController />
            </div>
        </div>
    
    </>;
});