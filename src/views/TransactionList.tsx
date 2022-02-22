import { TransactionListElController } from "controllers";
import React from "react";


const TransactionListView = ({ transactions, from }: { from: "seller" | "buyer", transactions: IOrderTuple[] }) => {
    return <ul className="transaction-list">
        {transactions.map(el => <TransactionListElController from={from} key={el.id} transaction={el.order} id={el.id} />)}
    </ul>;
};

export default TransactionListView;