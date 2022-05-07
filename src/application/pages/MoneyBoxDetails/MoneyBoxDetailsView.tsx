import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { FTMIcon, PiggyBank } from "resources/svg";
import IMoneyBoxDetailsViewModel from "./IMoneyBoxDetailsViewModel";

export default observer(function MoneyBoxDetailsView({
    id,
    sellerAddress,
    ftm,
    wei,
    getFilledFtm,
    getFilledWei,
    getFtmToFill,
    getWeiToFill,
    state,
    isPaid,
    isUnlocked,
    isRefunded,
    unlock,
    refund,
    feeAmountFTM,
    feeAmountWei,
    setFeeAmount,
    newPayment,
    partecipants,
    dateNtime,
}: IMoneyBoxDetailsViewModel) {

    return <div className="content-card">
        <section className="transaction-details">

            <div className="simple-link">
                <Link to="/transaction/out/" >Go back to your transactions</Link>
            </div>

            <div className="two-cols">
                <div className="img-box">
                    <PiggyBank className="bigPiggy" />
                </div>
                <div className="details">
                    <ul>
                        <li><div className="section-head">Transaction ID:</div>{id}</li>
                        <li><div className="section-head">Payed To:</div>{sellerAddress}</li>
                        <li><div className="section-head">Total Amount:</div>{ftm} FTM ({wei} wei)</li>
                        <li><div className="section-head">Filled:</div>{getFilledFtm} FTM ({getFilledWei} wei)</li>
                        <li><div className="section-head">To be Filled:</div>{getFtmToFill} FTM ({getWeiToFill} wei)</li>
                        <li><div className="section-head">State:</div>{state}</li>
                    </ul>
                </div>
            </div>

            <div className={!(isPaid || isUnlocked || isRefunded) ? "" : "hide"}>
                <label>Amount</label>
                <div className="ftm-input">
                    <input type="number" step="any" min="0.000000000000000001" max={getFtmToFill} className="clickable-input" value={feeAmountFTM || undefined} onChange={el => setFeeAmount(el.target.valueAsNumber)} placeholder="0.00" />
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
                <button id="contribute" onClick={newPayment} disabled={isPaid}>Contribute</button>
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
    </div>;
});