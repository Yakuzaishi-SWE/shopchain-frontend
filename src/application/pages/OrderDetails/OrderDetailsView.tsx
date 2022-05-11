import Popup from "application/utils/Popup";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
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
    isOwner,
    isSeller,
    date,
    unlockCode,
    setCode,
    code,
}: IOrderDetailsViewModel) {
    const location = useLocation();
    const [popUnlock, setPopUnlock] = useState(false);
    const [popRefund, setPopRefund] = useState(false);

    return <>
        <div className="page-container column">
            <div className="simple-link">
                {/*<Link to={back(location.pathname)}><BackArrowIcon className="svg-white" />Go back to your transactions</Link>*/}
            </div>
            <h1>Order Details</h1>
            <section className="transaction-details">
                <ul>
                    <li><div className="section-head">Transaction ID:</div>{id}</li>
                    <li><div className="section-head">Order Owner:</div>{ownerAddress}</li>
                    <li><div className="section-head">Payed To:</div>{sellerAddress}</li>
                    <li><div className="section-head">Amount:</div>{ftm} FTM ({wei} wei)</li>
                    <li><div className="section-head">State:</div>{state}</li>
                    <li><div className="section-head">Date:</div>{date}</li>
                </ul>

                <div className={"box-button " + ((state.toString() === "Unlocked" || state.toString() === "Refunded" || !(isOwner || isSeller)) ? "hide" : "")}>
                    <button className={isSeller ? "hide" : ""} id="unlock" onClick={() => setPopUnlock(true)} disabled={!isPaid}>Unlock</button>
                    <button id="refund" onClick={() => setPopRefund(true)} disabled={!isPaid}>Refund</button>
                </div>
            </section>
        </div>
        <Popup show={popUnlock} close={() => setPopUnlock(false)}>
            <form>
                <h2>Insert the Unlock Code: {unlockCode}</h2>
                <input type="number" value={code || undefined} onChange={el => setCode(el.target.valueAsNumber)}/>
            </form>
            <button onClick={() => setPopUnlock(unlock)}>Confirm</button>
        </Popup>
        <Popup show={popRefund} close={() => setPopRefund(false)}>
            <h2>You sure?</h2> 
            <button onClick={() => setPopRefund(refund)}>Confirm</button>
        </Popup>

    </>;
});