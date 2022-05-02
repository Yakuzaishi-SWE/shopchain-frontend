import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FTMIcon } from "resources/svg";
import { v4 } from "uuid";
import IECommerceViewModel from "./IECommerceViewModel";
import InputView from "./Input/InputView";

export default observer(function ECommerceView({
    amount,
    wei,
    id,
    setAmount,
    handleSubmit,
    redirectLink
} : IECommerceViewModel) {

    return <form className="payment-form" onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        return false;
    }}>
        {redirectLink ? <NavLink to={redirectLink} /> : <></>}
        <div className="form-wrapper">
            <label>Id</label>
            <input type="text" value={id} placeholder="0000-000000-000000000000000" disabled />
        </div>
        <div className="form-wrapper">
            <label>Amount</label>
            <div className="ftm-input">
                <input type="number" className="clickable-input" value={amount || undefined} onChange={el => setAmount(el.target.valueAsNumber)} placeholder="0.00" />
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
    </form>;
});