import { observer } from "mobx-react-lite";
import React from "react";
import { BalanceIcon, Loading } from "resources/svg";
import IOrderBalanceViewModel from "./IOrderBalanceViewModel";


export default observer(function OrderBalanceView({ 
    balanceFTM,
    balanceWEI,
    isBusy,
}: IOrderBalanceViewModel) {
    return <div className="widget">
        <div className="float-left widget-text">
            <h3>
                <span className="count"> {!isBusy ? balanceFTM : <Loading width="60" height="60"/>}</span> 
                <span className="currency">FTM</span>
            </h3>
            <p>Order Contract Balance</p> 
        </div> 
        <div className="float-right widget-icon">
            <BalanceIcon />
        </div>
    </div>;
});