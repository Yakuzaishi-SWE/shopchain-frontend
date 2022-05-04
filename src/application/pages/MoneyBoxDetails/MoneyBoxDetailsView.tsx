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
    newPayment,
    partecipants
}: IMoneyBoxDetailsViewModel) {

    return <><section className="transaction-details">
        <ul>
            <li><div className="section-head">Transaction ID:</div>{id}</li>
            <li><div className="section-head">Payed To:</div>{sellerAddress}</li>
            <li><div className="section-head">Total Amount:</div>{ftm} FTM ({wei} wei)</li>
            <li><div className="section-head">Filled:</div>{getFilledFtm} FTM ({getFilledWei} wei)</li>
            <li><div className="section-head">To be Filled:</div>{getFtmToFill} FTM ({getWeiToFill} wei)</li>
            <li><div className="section-head">State:</div>{state}</li>
        </ul>

        <div className="box-button">
            <button id="unlock" onClick={unlock} disabled={!isPaid}>Unlock</button>
            <button id="refund" onClick={refund} disabled={!isPaid}>Refund</button>
            <button id="copy-invite-link" onClick={refund} disabled={isPaid}>Copy invite link</button>
        </div>

        <div className="box-contribute">
            <label>Amount</label>
            <div className="ftm-input">
                <input type="number" step="any" min="0.000000000000000001" className="clickable-input" /*value={amount || undefined} onChange={el => setAmount(el.target.valueAsNumber)}*/ placeholder="0.00" />
                <span className="ftm-icon">
                    <FTMIcon />
                    FTM
                </span>
            </div>
            <div className="ftm-wei">
                <span>
                    ({wei}) wei
                </span>
            </div>
            <button id="contribute" onClick={refund} disabled={isPaid}>Contribute</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Partecipant Address</th>
                    <th>Paid Amount</th>
                </tr>
            </thead>
            <tbody>
                {partecipants && partecipants.map(partecipant =>
                    <tr>
                        <td>{partecipant.from}</td>
                        <td>{partecipant.amount.amount}</td>
                    </tr>
                )}
            </tbody>
        </table>

        <div className="simple-link">
            <Link to="/transaction/out/" >Go back to your transactions</Link>
        </div>
        
    </section>
    </>;
});