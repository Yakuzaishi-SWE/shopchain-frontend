import { observer } from "mobx-react";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import IPickAmountViewModel from "./IPickAmountViewModel";



export default observer(function PickAmountView({
    initFTM,
    initWei,
    createMoneyBox,
    setInitFTM,
}: IPickAmountViewModel) {
    const location = useLocation();
    return <>
        <Link to={{ pathname: "../", search: location.search }}>Back</Link>
        <input type="number" value={initFTM} onChange={e => setInitFTM(e.target.valueAsNumber)} />
        <span>({initWei} wei)</span>
        <button onClick={createMoneyBox}>Crea MoneyBox</button>
    </>;
});