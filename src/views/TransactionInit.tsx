import React from "react";
import { WeitoFTM } from "utils";

const TransactionInitView = ({ transaction, id, onCreate }: { transaction: ITransaction, id: string, onCreate: () => void }) => {
    return <>
        <section className="transaction-details">
            <header>Transaction Details</header>
            <p>Please choose the payment type that you prefer.<br />
            If you select “Pay Alone” you will redirect to checkout page and you will pay the entire order amount.<br />
            If you select Money Box you are going to create an order that you can share with your friends, to confirm
            the payment you have to fill the entire amount that is request.</p>
            <hr />
            <ul>
                <li>
                    <div className="section-head">Transaction id:</div>
                    {id}
                </li>
                <li>
                    <div className="section-head">Transaction seller:</div>
                    {transaction.seller}
                </li>
                <li>
                    <div className="section-head">Amount to pay:</div>
                    {WeitoFTM(Number(transaction.amount))} FTM ({transaction.amount} wei)
                </li>
            </ul>
        </section>
        <div className="box-button center">
            <button onClick={onCreate} className="btn-payalone">Pay Alone</button>
            <button className="btn-moneybox" disabled>Create Money Box</button>
        </div>
    </>;
};

export default TransactionInitView;