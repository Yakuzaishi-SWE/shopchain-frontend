import {useUnlock} from "hooks";
import React from "react";
import { TransactionDetailsView } from "views";

const TransactionDetailsController = ({ id, order }: { id: string, order: IOrder }) => {
    const { unlock } = useUnlock();

    const handleUnlock = () => {
        if (order)
            unlock(id, order.unlockCode);
    };

    return <TransactionDetailsView order={order} id={id} onUnlock={handleUnlock} />;
};

export default TransactionDetailsController;