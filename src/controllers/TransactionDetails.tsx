import { useSmartContract, useLoadingOverlay } from "hooks";
import React from "react";
import { TransactionDetailsView } from "views";

const TransactionDetailsController = ({ id, order }: { id: string, order: IOrder }) => {
    const [, {unlock, refund}] = useSmartContract();
    const [, {start, stop}] = useLoadingOverlay();
    
    const handleUnlock = () => {
        start();
        unlock(id, order.unlockCode)
            .then(() => {return;})
            .catch(err => {return;})
            .finally(() => stop());
    };

    const handleRefund = () => {
        start();
        refund(id)
            .then(() => {return;})
            .catch(err => {return;})
            .finally(() => stop());
    };

    return <TransactionDetailsView order={order} id={id} onUnlock={handleUnlock} onRefund={handleRefund} />;
};

export default TransactionDetailsController;