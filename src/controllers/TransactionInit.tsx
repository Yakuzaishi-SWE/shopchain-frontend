import { useAddress } from "hooks";
import useOrders from "hooks/useOrders";
import useTransaction from "hooks/useTransaction";
import React, { useState } from "react";
import { TransactionInitView } from "views";
import PageLoaderController from "controllers/PageLoader"

const TransactionInitController = ({ id }: { id: string }) => {
    // const t = useTransaction(id);
    const t: ITransaction = { amount: "50000000000000000", seller: "0x91350E18AE7133052E06436433040E80f2E6988E" };
    const address = useAddress();
    const { create, loading } = useOrders();
    //let { loading } = useOrders();
    //let [loading, setLoading] = useState(false);
    let handlePass = false;

    const handleCreate = () => {
        if (address){
            handlePass = true;
            create(address, { amount: t.amount, seller: t.seller, id })
                .then(
                    () => { 
                        //setLoading(false), 
                        console.log("success") 
                    }
                )
                .catch(
                    (err) => {
                        //setLoading(false), 
                        console.error(err, "Prova")
                    }
                );
        }
    }

    /*
    console.log("handlePass ", handlePass, "\nLoading: ", loading)
    */
    if(loading){
        return <>
                <p>Check your Metamask extension. The payment process may take few seconds ...</p>
                <PageLoaderController loading={loading} />
            </>
    } else
        return t ?
            <>
                <TransactionInitView transaction={t} id={id} onCreate={handleCreate} />
            </>: 
            <> <p>ERRORE</p> </>;
}

export default TransactionInitController;