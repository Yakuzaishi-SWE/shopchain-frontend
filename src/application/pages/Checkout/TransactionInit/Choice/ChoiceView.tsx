import { observer } from "mobx-react-lite";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import IChoiceViewModel from "./IChoiceViewModel";

export default observer(function ChoiceView({
    createOrder,
}: IChoiceViewModel) {
    const location = useLocation();
    return <>
        <div className="box-button center">
            <button onClick={createOrder} className="btn-payalone">Pay Alone</button>
            <Link to={{
                pathname: "moneybox",
                search: location.search,
            }} className="btn-moneybox">Create Money Box</Link>
        </div>
    </>;
});