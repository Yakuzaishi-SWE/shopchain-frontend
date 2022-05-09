import { observer } from "mobx-react";
import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { BackArrowIcon } from "resources/svg";
import ITransactionInitViewModel from "./ITransactionInitViewModel";

export default observer(function TransactionInitView({
    id,
    ftm,
    wei,
    sellerAddress,
}: ITransactionInitViewModel) {
    return <>
        <section className="transaction-details">
            <div className="simple-link">
                <Link to="/"><BackArrowIcon className="svg-white"/>Go to homepage</Link>
            </div>
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
                    {sellerAddress}
                </li>
                <li>
                    <div className="section-head">Amount to pay:</div>
                    {ftm} FTM ({wei} wei)
                </li>
            </ul>
        </section>
        <Outlet />
    </>;
});
