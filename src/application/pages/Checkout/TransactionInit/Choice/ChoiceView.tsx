import Popup from "application/utils/Popup";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Loading } from "resources/svg";
import IChoiceViewModel from "./IChoiceViewModel";

export default observer(function ChoiceView({
    createOrder,
    isBusy,
    isFailed,
}: IChoiceViewModel) {
    const location = useLocation();
    const [failedPopup, setFailedPopup] = useState(false);

    return <>
        <div className="box-button center">
            <button onClick={createOrder} className="btn-payalone">Pay Alone</button>
            <Link to={{
                pathname: "moneybox",
                search: location.search,
            }} className="btn-moneybox btn-shadow">Create Money Box</Link>
        </div>
        <Popup show={isBusy}>
            <div className="sweet-loading">
                <p>Check your Metamask extension. The payment process may take few seconds...</p>
                <Loading />
            </div>
        </Popup>
        {/* <Popup show={isFailed} close={() => setFailedPopup(false)}>
            <h3>Warning</h3>
            <p>Transaction cancelled</p>
        </Popup> */}
    </>;
});