import {useCreate} from "hooks";
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { TransactionInitView } from "views";
import PageLoaderController from "./PageLoader";

const TransactionInitController = ({ id }: { id: string }) => {
    const {search} = useLocation();
    
    const amount = useMemo(() => new URLSearchParams(search).get("amount"), [search]) || "0";

    const t: ITransaction = { amount, seller: "0x91350E18AE7133052E06436433040E80f2E6988E" };
    const { create, loaded, error} = useCreate({onSuccess: () => window.location.reload()});

    const handleCreate = () => create({ amount: t.amount, seller: t.seller, id });

    if (loaded !== undefined && !loaded)
        return <>
            <p>Check your Metamask extension. The payment process may take few seconds ...</p>
            <PageLoaderController />
        </>;
    else
        return <>
            <TransactionInitView transaction={t} id={id} onCreate={handleCreate} />
        </>;
};

export default TransactionInitController;