import { TransactionDetailsController, TransactionInitController } from "controllers";
import WaitingCall from "controllers/LoadingWrapper";
import { useOrder } from "hooks";
import React from "react";
import { useParams } from "react-router-dom";

const TransactionPage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) return <p>id is missing</p>;

    const { order, loaded, error } = useOrder(id);

    return <WaitingCall loaded={loaded} error={error}>
        {
            !order ?
                <TransactionInitController id={id} />
                :
                <TransactionDetailsController id={id} order={order} />
        }
    </WaitingCall>;

};

export default TransactionPage;