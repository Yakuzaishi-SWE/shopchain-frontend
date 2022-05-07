import { observer } from "mobx-react";
import React from "react";
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
}: IPickAmountViewModel) {
    const location =  useLocation();
    return <>
        <div className="center">
            <Link to={{ pathname: `/checkout/${id}/`,  search: location.search }} className="icon-btn back-btn btn-shadow">Go Back</Link>
            <div className="payment-form">
                <div className="form-wrapper">
                    <label>Your Contribute:</label>
                    <div className="ftm-input">
                        <input className="clickable-input addOnCreate-moneybox" type="number" value={initFTM} onChange={e => setInitFTM(e.target.valueAsNumber)} />
                        <span className="ftm-icon"><FTMIcon />FTM</span>
                    </div>
                    <div className="ftm-wei center">
                        <span>({initWei}) wei</span>
                    </div>
                </div>
            </div>
            <button onClick={createMoneyBox} className="btn-create">Create MoneyBox</button>
        </div>
    </>;
});