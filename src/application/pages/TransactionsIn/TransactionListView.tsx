import TransactionListUl from "components/TransactionListUl";
import { observer } from "mobx-react-lite";
import React from "react";
import ITransactionListViewModel from "./ITransactionListViewModel";
import TransactionListElController from "./TransactionListEl/TransactionListElController";

export default observer(function TransactionListView({ transactions }: ITransactionListViewModel) {
    return <TransactionListUl>
        {transactions.map(el => <TransactionListElController order={el}/>)}
    </TransactionListUl>;
});