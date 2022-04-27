import { TransactionListElController } from "controllers";
import { observer } from "mobx-react-lite";
import React from "react";
import ITransactionListViewModel from "./ITransactionListViewModel";

export default observer(function TransactionListView({ transactions, from }: ITransactionListViewModel) {
    return <ul className="transaction-list">
        {transactions.map(el => <TransactionListElController from={from} key={el.id} transaction={el.order} id={el.id} />)}
    </ul>;
});
