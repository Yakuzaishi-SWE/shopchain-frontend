import { TransactionDetailsController } from "controllers";
import WaitingCall from "controllers/LoadingWrapper";
import { useOrder } from "hooks";
import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

const TransactionDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) return <Redirect to="/transaction/out/" />;

    const { order, loaded, error } = useOrder(id);

    return <>
        <Link to="/transaction/out/" >Your Transactions</Link>
        <WaitingCall loaded={loaded} error={error}>
            {
                !order ?
                    <Redirect to={`/transaction/init/${id}/`} />
                    :
                    <TransactionDetailsController id={id} order={order} />
            }
        </WaitingCall>
    </>;

};

export default TransactionDetailsPage;