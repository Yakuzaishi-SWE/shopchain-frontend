import Popup from "application/utils/Popup";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FTMIcon } from "resources/svg";
import IPickAmountViewModel from "./IPickAmountViewModel";



export default observer(function PickAmountView({
    id,
    initFTM,
    initWei,
    createMoneyBox,
    setInitFTM,
    amountFtm,
}: IPickAmountViewModel) {
    const location =  useLocation();
    const [buttonPopup, setButtonPopup] = useState(false);

    return <>
        <div className="center">
            <Link to={{ pathname: `/checkout/${id}/`,  search: location.search }} className="icon-btn back-btn btn-shadow">Go Back</Link>
            <div className="payment-form">
                <div className="form-wrapper">
                    <label>Your Contribute:</label>
                    <div className="ftm-input">
                        <input className="clickable-input addOnCreate-moneybox" type="number" step="any" min="0.000000000000000001" max={amountFtm} value={initFTM} onChange={e => setInitFTM(e.target.valueAsNumber)} />
                        <span className="ftm-icon"><FTMIcon />FTM</span>
                    </div>
                    <div className="ftm-wei center">
                        <span>({initWei}) wei</span>
                    </div>
                </div>
            </div>
            <button onClick={() => setButtonPopup(createMoneyBox)} className="btn-create">Create MoneyBox</button>
        </div>
        <Popup show={buttonPopup} close={() => setButtonPopup(false)}>
            <h3>Warning</h3>
            <p>The chosen amount is greater than the amount needed to fill the moneybox ({amountFtm})</p>
        </Popup>
    </>;
});