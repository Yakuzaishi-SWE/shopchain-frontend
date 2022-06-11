/* eslint-disable prefer-arrow-callback */

import Popup from "application/utils/Popup";
import USDTtoFTM from "application/utils/USDTtoFTM";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { FTMIcon, Loading, PiggyBank } from "resources/svg";
import IMoneyBoxDetailsViewModel from "./IMoneyBoxDetailsViewModel";

export default observer(function MoneyBoxDetailsView({
    id,
    sellerAddress,
    usdt,
    filledUsdt,
    usdtToFill,
    state,
    isPaid,
    isUnlocked,
    isRefunded,
    unlock,
    refund,
    feeAmountFtm,
    setFeeAmount,
    newPayment,
    partecipants,
    dateNtime,
    isOwner,
    isSeller,
    ownerAddress,
    date,
    // back,
    isBusy,
    unlockCode,
    code,
    setCode,
}: IMoneyBoxDetailsViewModel) {
    const [error, setError] = useState(false);
    const [popUnlock, setPopUnlock] = useState(false);
    const [popRefund, setPopRefund] = useState(false);
    const [copy, setCopy] = useState(false);
    // const location = useLocation();

    return <>
        <div className="page-container column">
            {/* <div className="simple-link">
                <Link to={back(location.pathname)}><BackArrowIcon className="svg-white" />Go back to your transactions</Link>
            </div> */}
            <h1>MoneyBox Details</h1>
            <section className="transaction-details">

                <div className="two-cols">
                    <div className="img-box">
                        <PiggyBank className="bigPiggy" />
                        <span className="moneybox-percentage">{((filledUsdt / usdt) * 100).toFixed(0)}% filled</span>
                    </div>
                    <div className="details">
                        <ul>
                            <li><div className="section-head">Transaction ID:</div>{id}</li>
                            <li><div className="section-head">Owner:</div>{ownerAddress}</li>
                            <li><div className="section-head">Payed To:</div>{sellerAddress}</li>
                            <li><div className="section-head">Total Amount:</div>
                                <div className="usdt_ftm">
                                    <span>
                                        {usdt.toFixed(8)} USDT
                                    </span>
                                    <span>
                                    (<USDTtoFTM usdt={usdt} fixed={8}/> FTM)
                                    </span>
                                </div>
                            </li>
                            <li><div className="section-head">Filled:</div>
                                <div className="usdt_ftm">
                                    <span>
                                        {filledUsdt.toFixed(8)} USDT
                                    </span>
                                    <span>
                                        (<USDTtoFTM usdt={filledUsdt} fixed={8}/> FTM)
                                    </span>
                                </div>
                            </li>
                            <li><div className="section-head">To be Filled:</div>
                                <div className="usdt_ftm">
                                    <span>
                                        {usdtToFill > 0 ? usdtToFill.toFixed(8) : "0"} USDT
                                    </span>
                                    <span>
                                        ({usdtToFill > 0 ? <USDTtoFTM usdt={usdtToFill+0.0000005} fixed={8}/> : "0"} FTM)
                                    </span>
                                </div>
                            </li>
                            <li><div className="section-head">State:</div>{state}</li>
                            <li><div className="section-head">Date:</div>{date}</li>
                        </ul>

                        <form className="payment-form">
                            <div className={!(isPaid || isUnlocked || isRefunded) ? "form-wrapper" : "hide"}>
                                <label>Select the amount that you want to send</label>
                                <p className={error ? "err_p" : "hide"}>Amount must be between 1 wei and <USDTtoFTM usdt={usdtToFill}/> FTM</p>
                                <div className={error ? "ftm-input err_input" : "ftm-input"}>
                                    <input type="number" step="any" className="clickable-input" value={feeAmountFtm || undefined} onChange={el => setFeeAmount(el.target.valueAsNumber)} placeholder="0.00" />
                                    <span className="ftm-icon">
                                        <FTMIcon />
                                        FTM
                                    </span>
                                </div>
                                <button id="contribute" onClick={() => setError(newPayment)} disabled={isPaid}>Contribute</button>
                            </div>
                        </form>
                    </div>
                </div>

                <table id="table-payments">
                    <thead>
                        <tr>
                            <th>Partecipant Address</th>
                            <th>Paid Amount</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partecipants && partecipants.map(partecipant =>
                            <tr key={partecipant.timestamp}>
                                <td>{partecipant.from}</td>
                                <td>{partecipant.amount.USDT.toFixed(8)} USDT &nbsp; (<USDTtoFTM usdt={partecipant.amount.USDT} fixed={8}/> FTM)</td>
                                <td>{dateNtime(partecipant)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="box-button">
                    <button className={(isPaid && isOwner) ? "" : "hide"} id="unlock" onClick={() => setPopUnlock(true)} disabled={!isPaid}>Unlock</button>
                    <button className={(isUnlocked || isRefunded || !(isOwner || isSeller)) ? "hide" : ""} id="refund" onClick={() => setPopRefund(true)} disabled={isUnlocked}>Refund</button>
                    <button className={!(isPaid || isUnlocked || isRefunded) ? "" : "hide"} id="copy-invite-link" onClick={() => { navigator.clipboard.writeText("Help me fill my MoneyBox\n\n" + window.location.href).then(() => setCopy(true)); }} disabled={isPaid}>{copy ? <span id="text_success">Link successfully copied</span> : "Copy invite link"}</button>
                </div>

            </section>
        </div>
        <Popup show={isBusy}>
            <div className="sweet-loading">
                <p>Check your MetaMask extension. The payment process may take few seconds...</p>
                <Loading />
            </div>
        </Popup>
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
    </>;
});