import { useAddress } from "hooks";
import { useOrders } from "hooks/";
import React, { Children, useMemo } from "react";
import { TransactionListView } from "views";
import { Loading } from "resources/svg";
import { OrderState } from "types/enums";

const LoadingWrapper = ({ children }: { children: React.ReactChild, loaded: boolean| undefined, error: string | undefined }) => {
    return <>
        {children}
    </>;
};

const TransactionListController = ({ from, state }: { from: "seller" | "buyer", state?: OrderState }) => {
    const address = useAddress() || undefined;

    const { orders, error, loaded } = useOrders({ seller: from == "seller" ? address : undefined, buyer: from == "buyer" ? address : undefined });

    const filteredorders = useMemo(() => orders?.filter(el => (state !== undefined) ? el.order.state === state : true), [orders, state]);

    return <>
        {

            (loaded) ?
                (
                    error ? <p>{error.toString()}</p>
                        :
                        (
                            filteredorders ? <TransactionListView transactions={filteredorders} />
                                :
                                <div className="sweet-loading">
                                    <Loading />
                                </div>
                        )
                ) :
                <div className="sweet-loading">
                    <Loading />
                </div>
        }
    </>;
};

export default TransactionListController;