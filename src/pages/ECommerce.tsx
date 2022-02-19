import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { FTMIcon } from "resources/svg";
import { InputView } from "views";

const ECommercePage = () => {
    const [amount, setAmount] = useState<number>(0);
    const [id, setId] = useState<string>("");
    const [redirectLink, setRedirectLink] = useState<string | undefined>(undefined);

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        
        const usp = new URLSearchParams();
        usp.set("amount", String(amount));
        setRedirectLink(`/transaction/t/${id}/?${usp}`);

        return false;
    };

    return <form className="payment-form">
        {redirectLink ? <Redirect to={redirectLink} /> : <></>}
        <div className="form-wrapper">
            <label>Id</label>
            <InputView value={id} setValue={setId} placeholder="0000-000000-000000000000000" />
        </div>
        <div className="form-wrapper">
            <label>Amount</label>
            <div className="ftm-input">
                <input type="number" className="clickable-input" value={amount || 0} onChange={el => setAmount(el.target.valueAsNumber)} placeholder="0.00" />
                <span className="ftm-icon">
                    <FTMIcon />
                    FTM
                </span>
            </div>
        </div>
        <div className="btn-block">
            <input type="submit" onClick={handleSubmit}></input>
        </div>
    </form>;
};

export default ECommercePage;
