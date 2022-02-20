import React, { useMemo, useState } from "react";
import { Redirect } from "react-router-dom";
import { FTMIcon } from "resources/svg";
import { InputView } from "views";
import { v4 } from "uuid";
import { FTMtoWei } from "utils";
import Decimal from "decimal.js";

const ECommercePage = () => {
    const [amount, setAmount] = useState<string>("");
    const [id, setId] = useState<string>(v4());
    const [redirectLink, setRedirectLink] = useState<string | undefined>(undefined);

    const FTM = useMemo(() => {
        if (/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i.test(amount)) {
            return new Decimal(amount);
        } else return new Decimal(0);
    },[amount]);

    const wei = useMemo(() => FTMtoWei(FTM), [FTM]);

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();

        const usp = new URLSearchParams();
        usp.set("amount", String(wei));
        setRedirectLink(`/transaction/init/${id}/?${usp}`);

        return false;
    };

    return <form className="payment-form">
        {redirectLink ? <Redirect to={redirectLink} /> : <></>}
        <div className="form-wrapper">
            <label>Id</label>
            <InputView value={id} setValue={setId} placeholder="0000-000000-000000000000000" disabled />
        </div>
        <div className="form-wrapper">
            <label>Amount</label>
            <div className="ftm-input">
                <input type="number" className="clickable-input" value={amount || undefined} onChange={el => setAmount(el.target.value)} placeholder="0.00" />
                <span>
                    ({wei}) wei
                </span>
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
