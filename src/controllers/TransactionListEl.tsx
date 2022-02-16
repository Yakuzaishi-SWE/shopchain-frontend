import React from "react";
import { TransactionListElView } from "views";

const TransactionListElController = ({ transaction, id }: { transaction: IOrder, id: string }) => {
    return <TransactionListElView transaction={transaction} id={id} />;
};

export default TransactionListElController;