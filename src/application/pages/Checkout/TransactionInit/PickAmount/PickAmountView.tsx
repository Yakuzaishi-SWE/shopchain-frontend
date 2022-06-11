import Popup from "application/utils/Popup";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FTMIcon, Loading } from "resources/svg";
import IPickAmountViewModel from "./IPickAmountViewModel";



export default observer(function PickAmountView({
    id,
    initFTM,
    createMoneyBox,
    setInitFTM,
    amountFtm,
    isBusy,
}: IPickAmountViewModel) {
    const location =  useLocation();
    const [error, setError] = useState(false);

    return <>
        <div>
            <div className="payment-form center">
                <div className="form-wrapper">
                    <label>Your Contribute:</label>
                    <p className={error ? "err_p" : "hide"}>Amount must be between 0 and {amountFtm} FTM</p>
                    <div className={error ? "ftm-input err_input" : "ftm-input"}>
                        <input className="clickable-input addOnCreate-moneybox" type="number" step="any" value={initFTM} onChange={e => setInitFTM(e.target.valueAsNumber)}/>
                        <span className="ftm-icon"><FTMIcon />FTM</span>
                        
                    </div>
                </div>
            </div>
            <div className="box-button">
                <Link to={{ pathname: `/checkout/${id}/`,  search: location.search }} className="back-btn btn-shadow">Go Back</Link>
                <button onClick={() => setError(createMoneyBox)} className="btn-shadow btn-moneybox">Create MoneyBox</button>
            </div>
        </div>
        <Popup show={isBusy}>
            <div className="sweet-loading">
                <p>Check your MetaMask extension. The payment process may take few seconds...</p>
                <Loading />
            </div>
        </Popup>
    </>;
});