import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import IChoiceViewModel from "./IChoiceViewModel";

export default observer(function ChoiceView({
    createOrder,
}: IChoiceViewModel) {
    return <>
        <div className="box-button center">
            <button onClick={createOrder} className="btn-payalone">Pay Alone</button>
            <Link to="moneybox" className="btn-moneybox">Create Money Box</Link>
        </div>
    </>;
});