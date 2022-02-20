import { useLoadingOverlay, useSmartContract } from "hooks";
import React from "react";
import { TransactionListElView } from "views";

const TransactionListElController = ({ transaction, id }: { transaction: IOrder, id: string }) => {
    const [,{unlock}] = useSmartContract();
    const [, {start, stop}] = useLoadingOverlay();
    
    const handleUnlock = () => {
        start();
        unlock(id, transaction.unlockCode)
            .then(() => {return;})
            .catch(err => {return;})
            .finally(() => stop());
    };

    return <TransactionListElView transaction={transaction} id={id} onUnlock={handleUnlock}/>;
};

export default TransactionListElController;