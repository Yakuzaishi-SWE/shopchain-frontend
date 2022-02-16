import { useUnlock } from "hooks";
import React from "react";
import { TransactionListElView } from "views";

const TransactionListElController = ({ transaction, id }: { transaction: IOrder, id: string }) => {
    const {unlock} =  useUnlock({onSuccess: () => window.location.reload()});
    
    const handleUnlock = () => unlock(id, transaction.unlockCode);

    return <TransactionListElView transaction={transaction} id={id} onUnlock={handleUnlock}/>;
};

export default TransactionListElController;