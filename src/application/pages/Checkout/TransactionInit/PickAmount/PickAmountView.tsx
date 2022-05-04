import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import IPickAmountViewModel from "./IPickAmountViewModel";



export default observer(function PickAmountView({
    initFTM,
    initWei,
    createMoneyBox,
    setInitFTM,
    back,
}: IPickAmountViewModel) {
    return <>
        <div className="center">
            <Link to={back()}>Back</Link>
            <input type="number" value={initFTM} onChange={e => setInitFTM(e.target.valueAsNumber)} />
            <span>({initWei} wei)</span>
            <button onClick={createMoneyBox}>Create MoneyBox</button>
        </div>
    </>;
});