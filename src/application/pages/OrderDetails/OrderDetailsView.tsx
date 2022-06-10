import Popup from "application/utils/Popup";
import USDTtoFTM from "application/utils/USDTtoFTM";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Loading } from "resources/svg";
import IOrderDetailsViewModel from "./IOrderDetailsViewModel";

export default observer(function OrderDetailsView({
    id,
    ownerAddress,
    sellerAddress,
    usdt,
    state,
    isPaid,
    unlock,
    refund,
    isOwner,
    isSeller,
    date,
    unlockCode,
    setCode,
    code,
    isBusy,
}: IOrderDetailsViewModel) {
    // const location = useLocation();
    const [popUnlock, setPopUnlock] = useState(false);
    const [popRefund, setPopRefund] = useState(false);

    return <>
        <div className="page-container column">
            {/* <div className="simple-link">
                <Link to={back(location.pathname)}><BackArrowIcon className="svg-white" />Go back to your transactions</Link>
            </div> */}
            <h1>Order Details</h1>
            <section className="transaction-details">
                <ul>
                    <li><div className="section-head">Transaction ID:</div>{id}</li>
                    <li><div className="section-head">Order Owner:</div>{ownerAddress}</li>
                    <li><div className="section-head">Payed To:</div>{sellerAddress}</li>
                    <li><div className="section-head">Amount:</div>{usdt} USDT </li>
                    <li className="conversion">(<USDTtoFTM usdt={usdt}/> FTM)</li>
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
                <h2>Please insert the Unlock Code to confirm your choice:</h2>
                <span className="unlock-code">{unlockCode}</span>
                <div className="unlock-input">
                    <input type="number" value={code || undefined} onChange={el => setCode(el.target.valueAsNumber)} />
                </div>
            </form>
            <button onClick={() => setPopUnlock(unlock)}>Confirm</button>
        </Popup>
        <Popup show={popRefund} close={() => setPopRefund(false)}>
            <h2 className="refundPopup">Are you sure?</h2>
            <p className="refundPopup"><span className="danger-text">Attention!</span> This operation is not reversible.</p>
            <button onClick={() => setPopRefund(refund)}>Confirm</button>
        </Popup>
        <Popup show={isBusy}>
            <div className="sweet-loading">
                <p>Check your MetaMask extension. The process may take few seconds...</p>
                <Loading />
            </div>
        </Popup>
    </>;
});