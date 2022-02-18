import { TransactionListElController } from "controllers";
import React from "react";


const TransactionListView = ({ transactions }: { transactions: IOrderTuple[] }) => {
    return <ul className="transaction-card">
        {transactions.map(el => <TransactionListElController key={el.id} transaction={el.order} id={el.id} />)}
    </ul>;
};

export default TransactionListView;