import { TransactionDetailsController, TransactionInitController } from "controllers";
import { useOrder } from "hooks";
import React from "react";
import { useParams } from "react-router-dom";
import { Loading } from "resources/svg";


const TransactionPage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) return <p>id is missing</p>;

    const { order, loaded, error } = useOrder(id);

    return <>
        {
            loaded ?
                (
                    !order ?
                        <TransactionInitController id={id} />
                        :
                        <TransactionDetailsController id={id} order={order} />
                )
                :
                <div className="sweet-loading">
                    <Loading />
                </div>
        }
    </>;

};

export default TransactionPage;