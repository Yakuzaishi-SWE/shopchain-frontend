import Popup from "application/utils/Popup";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BackArrowIcon, FTMIcon, PiggyBank } from "resources/svg";
import IMoneyBoxDetailsViewModel from "./IMoneyBoxDetailsViewModel";

export default observer(function MoneyBoxDetailsView({
    id,
    sellerAddress,
    ftm,
    wei,
    filledFtm,
    filledWei,
    ftmToFill,
    weiToFill,
    state,
    isPaid,
    isUnlocked,
    isRefunded,
    unlock,
    refund,
    feeAmountFtm,
    feeAmountWei,
    setFeeAmount,
    newPayment,
    partecipants,
    dateNtime,
    back,
}: IMoneyBoxDetailsViewModel) {

    const location = useLocation();
    const [buttonPopup, setButtonPopup] = useState(false);

    return <>
        <div className="simple-link fixed-top-left">
            <Link to={back(location.pathname)}><BackArrowIcon className="svg-white"/>Go back to homepage</Link>
        </div>
        <div className="page-container column">
            <h1>MoneyBox Details</h1>
            <section className="transaction-details">

                <div className="two-cols">
                    <div className="img-box">
                        <PiggyBank className="bigPiggy" />
                        <span className="moneybox-percentage">{(filledFtm/ftm)*100}% filled</span>
                    </div>
                    <div className="details">
                        <ul>
                            <li><div className="section-head">Transaction ID:</div>{id}</li>
                            <li><div className="section-head">Payed To:</div>{sellerAddress}</li>
                            <li><div className="section-head">Total Amount:</div>{ftm} FTM ({wei} wei)</li>
                            <li><div className="section-head">Filled:</div>{filledFtm} FTM ({filledWei} wei)</li>
                            <li><div className="section-head">To be Filled:</div>{ftmToFill} FTM ({weiToFill} wei)</li>
                            <li><div className="section-head">State:</div>{state}</li>
                        </ul>

                        <form className="payment-form">
                            <div className={!(isPaid || isUnlocked || isRefunded) ? "form-wrapper" : "hide"}>
                                <label>Select the amount that you want to send</label>
                                <div className="ftm-input">
                                    <input type="number" step="any" min="0.000000000000000001" max={ftmToFill} className="clickable-input" value={feeAmountFtm || undefined} onChange={el => setFeeAmount(el.target.valueAsNumber)} placeholder="0.00" />
                                    <span className="ftm-icon">
                                        <FTMIcon />
                                        FTM
                                    </span>
                                </div>
                                <div className="ftm-wei">
                                    <span>
                                        ({feeAmountWei}) wei
                                    </span>
                                </div>
                                <button id="contribute" onClick={() => setButtonPopup(newPayment)} disabled={isPaid}>Contribute</button>
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
                            <tr key={partecipant.from}>
                                <td>{partecipant.from}</td>
                                <td>{partecipant.amount.FTM}</td>
                                <td>{dateNtime(partecipant)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="box-button">
                    <button className={isPaid ? "" : "hide"} id="unlock" onClick={unlock} disabled={!isPaid}>Unlock</button>
                    <button className={(isUnlocked || isRefunded) ? "hide" : ""} id="refund" onClick={refund} disabled={isUnlocked}>Refund</button>
                    <button className={!(isPaid || isUnlocked || isRefunded) ? "" : "hide"} id="copy-invite-link" onClick={() => { navigator.clipboard.writeText("Help me fill my MoneyBox, I'm poor...\n\n" + window.location.href).then(function () { alert("Invite Link Successfully Copied!"); }); }} disabled={isPaid}>Copy invite link</button>
                </div>

            </section>
        </div>
        
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Warning</h3>
            <p>The chosen amount is greater than the amount needed to fill the moneybox ({ftmToFill})</p>
        </Popup>
    </>;
});