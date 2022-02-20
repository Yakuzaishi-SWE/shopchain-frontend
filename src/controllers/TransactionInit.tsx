import { useLoadingWrap, useSmartContract } from "hooks";
import { } from "hooks";
import useLoadingOverlay from "hooks/useLoadingOverlay";
import React, { useMemo, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { TransactionInitView } from "views";

const TransactionInitController = ({ id }: { id: string }) => {
    const { search } = useLocation();
    const amount = useMemo(() => new URLSearchParams(search).get("amount"), [search]) || "0";
    const t: ITransaction = { amount, seller: "0x91350E18AE7133052E06436433040E80f2E6988E" };
    const [to, setTo] = useState<string | undefined>(undefined);

    const [, { create }] = useSmartContract();

    const [, { start, stop }] = useLoadingOverlay();

    const handleCreate = () => {
        start();
        create({ amount: t.amount, seller: t.seller, id })
            .then(() => setTo("/transaction-success/"))
            .catch(err => console.error(err))
            .finally(() => stop());
    };

    return <>
        {
            to ? <Redirect to={to}></Redirect> : <></>
        }
        <TransactionInitView transaction={t} id={id} onCreate={handleCreate} />;
    </>;
};

export default TransactionInitController;