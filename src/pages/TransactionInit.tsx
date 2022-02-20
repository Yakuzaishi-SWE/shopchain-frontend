import { TransactionInitController } from "controllers";
import WaitingCall from "controllers/LoadingWrapper";
import { useOrder } from "hooks";
import React from "react";
import { Redirect, useParams } from "react-router-dom";

const TransactionInitPage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) return <Redirect to="/transaction/init/" />;

    const { order, loaded, error } = useOrder(id);

    return <WaitingCall loaded={loaded} error={error}>
        {
            !order ?
                <TransactionInitController id={id} />
                :
                <Redirect to={`/transaction/out/${id}/`} />
        }
    </WaitingCall>;

};

export default TransactionInitPage;