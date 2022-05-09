import { observer } from "mobx-react-lite";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { BackArrowIcon } from "resources/svg";
import IOrderDetailsViewModel from "./IOrderDetailsViewModel";

export default observer(function OrderDetailsView({
    id,
    ownerAddress, 
    sellerAddress, 
    ftm, 
    wei,
    state, 
    isPaid, 
    unlock, 
    refund,
    back,
}: IOrderDetailsViewModel) {
    const location = useLocation();

    return <><div className="content-card">
        <section className="transaction-details">
            <ul>
                <li><div className="section-head">Transaction ID:</div>{id}</li>
                <li><div className="section-head">Order Owner:</div>{ownerAddress}</li>
                <li><div className="section-head">Payed To:</div>{sellerAddress}</li>
                <li><div className="section-head">Amount:</div>{ftm} FTM ({wei} wei)</li>
                <li><div className="section-head">State:</div>{state}</li>
            </ul>

            <div className={"box-button " + ((state.toString() === "Unlocked" || state.toString() === "Refunded") ? "hide" : "")}>
                <button id="unlock" onClick={unlock} disabled={!isPaid}>Unlock</button>
                <button id="refund" onClick={refund} disabled={!isPaid}>Refund</button>
            </div>
        </section>
    </div></>;
});