import USDTtoFTM from "application/utils/USDTtoFTM";
import { observer } from "mobx-react-lite";
import React from "react";
import { BalanceIcon, Loading } from "resources/svg";
import IMoneyBoxBalanceViewModel from "./IMoneyBoxBalanceViewModel";


export default observer(function MoneyBoxBalanceView({ 
    balanceUSDT,
    isLoaded,
}: IMoneyBoxBalanceViewModel) {
    return <div className="widget">
        <div className="float-left widget-text">
            <h3>
                <span className="count"> {isLoaded ? balanceUSDT : <Loading width="60" height="60"/>}</span> 
                <span className="currency">USDT</span>
            </h3>
            <h5 className="conversionSingle">({balanceUSDT>0 ? <USDTtoFTM usdt={balanceUSDT}/> : 0} FTM)</h5>
            <p>MoneyBox Balance</p> 
        </div> 
        <div className="float-right widget-icon">
            <BalanceIcon />
        </div>
    </div>;
});