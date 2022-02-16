import { useAddress } from "hooks";
import { useOrders } from "hooks/";
import React, { useState } from "react";
import { TransactionListView } from "views";
import { Loading } from "resources/svg";
import TransDirectionSelectorController from "./TransDirectionSelector";

const TransactionListController = () => {
    const address = useAddress() || undefined;
    const [isSeller, setIsSeller] = useState<boolean>(true);
    const { orders, error, loaded } = useOrders({ seller: isSeller ? address : undefined, buyer: !isSeller ? address : undefined });

    return <>
        <TransDirectionSelectorController isSeller={isSeller} setIsSeller={setIsSeller}/>
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