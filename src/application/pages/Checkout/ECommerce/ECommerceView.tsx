import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { FTMIcon } from "resources/svg";
import IECommerceViewModel from "./IECommerceViewModel";

export default observer(function ECommerceView({
    amount,
    wei,
    id,
    setAmount,
    handleSubmit,
} : IECommerceViewModel) {
    const [error, setError] = useState(false);

    return <>
        
        <form className="payment-form checkout-form" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            return false;
        }}>
            <div className="form-wrapper">
                <h2 className="center">Transaction Initialization</h2>
                <label className="toTheLeft">Id</label>
                <input type="text" value={id} onChange={() => {return;}} placeholder="0000-000000-000000000000000" disabled />
            </div>
            <div className="form-wrapper">
                <label className="toTheLeft">Amount</label>
                <p className={error ? "err_p": "hide"}>The amount must be higher than 0</p>
                <div className={error ? "ftm-input err_input" : "ftm-input"}>
                    <input type="number" step="any" className="clickable-input" value={amount || undefined} onChange={el => setAmount(el.target.valueAsNumber)} placeholder="0.00" />
                    <span className="ftm-icon">
                        <FTMIcon />
                        FTM
                    </span>
                </div>
            </div>
            <div className="btn-block">
                <input type="submit" value="Send" onClick={() => {if(amount <= 0) setError(true); else setError(false);}}></input>
            </div>
        </form>
    </>;
});