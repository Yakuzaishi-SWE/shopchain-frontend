import { useAddress } from "hooks";
import useSinglePayment from "hooks/useSinglePayment";
import React from "react";
import { useParams } from "react-router-dom";


const SplashTransaction = () => {
    const { dest, amount } = useParams<{ dest: string, amount: string }>();
    const contract = useSinglePayment();
    const address = useAddress();

    const getBalance = () => {
        if (contract) contract.methods
            .contractBalance()
            .call({}, (err, resp) => {
                if (err) console.error(err);
                else console.log(resp);
            });
    }

    const newOrder = () => {
        if (contract) contract.methods
            .newOrder("0x91350E18AE7133052E06436433040E80f2E6988E", 100, "b5776125-5755-42bc-b917-82edc7023efa")
            .send({from: address, value: 100 })
            .then(ok => console.log(ok))
            .catch(err => console.error(err));
    }

    return <>
        <h1>Stai pagando {amount} a {dest}</h1>
        <section>
            <h2>Choose Payment Method</h2>
            <div className="p-methods">
                <button className="p-method" onClick={getBalance}>
                    Single
                </button>
                <button className="p-method" onClick={newOrder}>
                    Money Box
                </button>
            </div>
        </section>
    </>
}

export default SplashTransaction;