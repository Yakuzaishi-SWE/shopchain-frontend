import { useAddress } from "hooks";
import { useOrders } from "hooks/";
import React, { useMemo } from "react";
import { TransactionListView } from "views";
import { Loading } from "resources/svg";
import { OrderState } from "types/enums";
import WaitingCall from "./LoadingWrapper";

const TransactionListController = ({ from, state }: { from: "seller" | "buyer", state?: OrderState }) => {
    const address = useAddress() || undefined;

    const { orders, error, loaded } = useOrders({ seller: from == "seller" ? address : undefined, buyer: from == "buyer" ? address : undefined });

    const filteredorders = useMemo(() => orders?.filter(el => (state !== undefined) ? el.order.state === state : true), [orders, state]);

    return <WaitingCall>
        {
            filteredorders ?
                <TransactionListView transactions={filteredorders} />
                :
                <></>
        }
    </WaitingCall>;
};

export default TransactionListController;