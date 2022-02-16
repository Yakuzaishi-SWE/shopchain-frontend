import { useAddress } from "hooks";
import { useOrders } from "hooks/";
import React, { useEffect, useMemo, useState } from "react";
import { TransactionListView } from "views";
import { Loading } from "resources/svg";
import TransDirectionSelectorController from "./TransDirectionSelector";
import { useHistory, useLocation } from "react-router-dom";

const TransactionListController = () => {
    const address = useAddress() || undefined;
    const [isSeller, setIsSeller] = useState<boolean>(true);
    const { orders, error, loaded } = useOrders({ seller: isSeller ? address : undefined, buyer: !isSeller ? address : undefined });

    const history = useHistory();
    const { search } = useLocation();

    const usp = useMemo(() => {
        const u = new URLSearchParams();
        u.set("seller", isSeller ? "true" : "false");
        return u;
    }, [search, isSeller]);

    useEffect(() => {
        history.push({ search: usp.toString() });
    }, [usp]);

    return <>
        <TransDirectionSelectorController isSeller={isSeller} setIsSeller={setIsSeller} />
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