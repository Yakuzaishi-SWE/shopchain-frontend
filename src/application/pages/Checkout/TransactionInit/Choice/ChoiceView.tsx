import Popup from "application/utils/Popup";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import IChoiceViewModel from "./IChoiceViewModel";

export default observer(function ChoiceView({
    createOrder,
    isBusy,
}: IChoiceViewModel) {
    const location = useLocation();
    return <>
        <div className="box-button center">
            <button onClick={createOrder} className="btn-payalone">Pay Alone</button>
            <Link to={{
                pathname: "moneybox",
                search: location.search,
            }} className="btn-moneybox btn-shadow">Create Money Box</Link>
        </div>
        <Popup show={isBusy} close={() => {return;}}>
            <h3>Warning</h3>
        </Popup>
    </>;
});