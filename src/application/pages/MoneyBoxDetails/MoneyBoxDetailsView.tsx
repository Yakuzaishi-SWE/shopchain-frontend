import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { FTMIcon } from "resources/svg";
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
    unlock, 
    refund,
    feeAmountFTM,
    feeAmountWei,
    setFeeAmount, 
    newPayment,
    partecipants,
}: IMoneyBoxDetailsViewModel) {

    return <><section className="transaction-details">
        
        <div className="simple-link">
            <Link to="/transaction/out/" >Go back to your transactions</Link>
        </div>

        <div className="two-cols">
            <div className="img-box">
                <p className="piggy-img">piggyBank image</p> {/* sostituire con svg*/}
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

        <div className="box-contribute">
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
                        <td>{new Date(partecipant.timestamp*1000).toLocaleDateString()}</td>
                    </tr>
                )}
            </tbody>
        </table>

        <div className="box-button">
            <button id="unlock" onClick={unlock} disabled={!isPaid}>Unlock</button>
            <button id="refund" onClick={refund}>Refund</button>
            <button id="copy-invite-link" onClick={() => {navigator.clipboard.writeText(window.location.href).then(function() {alert("succesfully copied");});}} disabled={isPaid}>Copy invite link</button>
        </div>
        
    </section>
    </>;
});