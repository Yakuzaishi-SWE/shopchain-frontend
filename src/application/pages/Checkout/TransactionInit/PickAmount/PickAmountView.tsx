import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import IPickAmountViewModel from "./IPickAmountViewModel";



export default observer(function PickAmountView({
    amount,
    wei,
    createMoneyBox,
    setFTM,
}: IPickAmountViewModel) {
    return <>
        <Link to="..">Back</Link>
        <input type="number" value={amount} onChange={e => setFTM(e.target.valueAsNumber)} />
        <span>({wei} wei)</span>
        <button onClick={createMoneyBox}>Crea MoneyBox</button>
    </>;
});