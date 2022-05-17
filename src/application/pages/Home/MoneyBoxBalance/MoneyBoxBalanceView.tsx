import { observer } from "mobx-react-lite";
import React from "react";
import { BalanceIcon, Loading } from "resources/svg";
import IMoneyBoxBalanceViewModel from "./IMoneyBoxBalanceViewModel";


export default observer(function MoneyBoxBalanceView({ 
    balanceFTM,
    balanceWEI,
    isBusy,
}: IMoneyBoxBalanceViewModel) {
    return <div className="widget">
        <div className="float-left widget-text">
            <h3>
                <span className="count"> {!isBusy ? balanceFTM : <Loading width="60" height="60"/>}</span> 
                <span className="currency">FTM</span>
            </h3>
            <p>MoneyBox Balance</p> 
        </div> 
        <div className="float-right widget-icon">
            <BalanceIcon />
        </div>
    </div>;
});