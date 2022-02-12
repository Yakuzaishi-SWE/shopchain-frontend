import { useAddress } from "hooks";
import useOrders from "hooks/useOrders";
import useTransaction from "hooks/useTransaction";
import React from "react";
import { TransactionInitView } from "views";

const TransactionInitController = ({ id }: { id: string }) => {
    // const t = useTransaction(id);
    const t: ITransaction = { amount: "500000000000000000", seller: "0x91350E18AE7133052E06436433040E80f2E6988E" };
    const address = useAddress();
    const { create } = useOrders();

    const handleCreate = () => {
        if (address)
            create(address, { amount: t.amount, seller: t.seller, id })
                .then(() => { console.log("success") })
                .catch(err => console.error(err));
    }

    return t ? <TransactionInitView transaction={t} id={id} onCreate={handleCreate} /> : <></>;
}

export default TransactionInitController;