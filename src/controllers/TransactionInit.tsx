import { useCreate } from "hooks";
import React, { useMemo, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Loading } from "resources/svg";
import { TransactionInitView } from "views";
import PageLoaderController from "./PageLoader";

const TransactionInitController = ({ id }: { id: string }) => {
    const { search } = useLocation();
    const amount = useMemo(() => new URLSearchParams(search).get("amount"), [search]) || "0";
    const t: ITransaction = { amount, seller: "0x91350E18AE7133052E06436433040E80f2E6988E" };
    const [to, setTo] = useState<string | undefined>(undefined);

    const { create, loaded, error } = useCreate({ onSuccess: () => setTo("/transaction-success/") });

    const handleCreate = () => create({ amount: t.amount, seller: t.seller, id });

    if (loaded !== undefined && !loaded)
        return <>
            <p>Check your Metamask extension. The payment process may take few seconds ...</p>
            <PageLoaderController />
            {to ? <Redirect to={to} /> : <></>}
        </>;
    else
        return <>
            <TransactionInitView transaction={t} id={id} onCreate={handleCreate} />
        </>;
};

export default TransactionInitController;