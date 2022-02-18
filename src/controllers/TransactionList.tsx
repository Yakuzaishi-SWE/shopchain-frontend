import { useAddress } from "hooks";
import { useOrders } from "hooks/";
import React, { useState } from "react";
import { TransactionListView } from "views";
import { Loading } from "resources/svg";
import TransDirectionSelectorController from "./TransDirectionSelector";

const TransactionListController = ({from}: {from: string|null}) => {
    const address = useAddress() || undefined;
    //const [isSeller, setIsSeller] = useState<boolean>(true);
    
    
    const { orders, error, loaded } = useOrders({ seller: from=="seller" ? address : undefined, buyer: from=="buyer" ? address : undefined });

    return <>
        {
            (loaded) ?
                (
                    error ? <p>{error.toString()}</p>
                        :
                        (
                            orders ? <TransactionListView transactions={orders} />
                                :
                                <Loading />
                        )
                ) :
                <Loading />
        }
    </>;
};

export default TransactionListController;