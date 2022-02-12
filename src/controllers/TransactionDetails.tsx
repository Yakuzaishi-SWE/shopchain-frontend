import { useOrder } from "hooks";
import React from "react";
import { TransactionDetailsView } from "views";

const TransactionDetailsController = ({ id }: { id: string }) => {
    const { order, unlock } = useOrder(id);

    const handleUnlock = () => {
        if (order)
            unlock(order.unlockCode)
                .then(() => { console.log("success") })
                .catch(err => console.error(err));
    }

    return order ? <TransactionDetailsView order={order} id={id} onUnlock={handleUnlock} /> : <></>
}

export default TransactionDetailsController;