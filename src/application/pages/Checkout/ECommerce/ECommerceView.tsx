import { observer } from "mobx-react-lite";
import React from "react";
import { FTMIcon } from "resources/svg";
import IECommerceViewModel from "./IECommerceViewModel";

export default observer(function ECommerceView({
    amount,
    wei,
    id,
    setAmount,
    handleSubmit,
} : IECommerceViewModel) {

    return <>
        
        <form className="payment-form checkout-form" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            return false;
        }}>
            <div className="form-wrapper">
                <label className="toTheLeft">Id</label>
                <input type="text" value={id} onChange={() => {return;}} placeholder="0000-000000-000000000000000" disabled />
            </div>
            <div className="form-wrapper">
                <label className="toTheLeft">Amount</label>
                <div className="ftm-input">
                    <input type="number" step="any" min="0.000000000000000001" className="clickable-input" value={amount || undefined} onChange={el => setAmount(el.target.valueAsNumber)} placeholder="0.00" />
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
            </div>
            <div className="btn-block">
                <input type="submit" value="Send"></input>
            </div>
        </form>
    </>;
});