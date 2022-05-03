import { observer } from "mobx-react-lite";
import React from "react";
import ITransactionListViewModel from "./ITransactionListViewModel";
import TransactionListElController from "../TransactionListEl/TransactionListElController";

export default observer(function TransactionListView({ transactions }: ITransactionListViewModel) {
    return <ul className="transaction-list">
        {transactions.map(el => <TransactionListElController key={el.id} order={el} />)}
    </ul>;
});
