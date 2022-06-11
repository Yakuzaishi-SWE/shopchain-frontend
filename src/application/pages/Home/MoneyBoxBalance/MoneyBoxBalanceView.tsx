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
                <span className="count"> {isLoaded ? balanceUSDT.toFixed(8) : <Loading width="60" height="60"/>}</span> 
                <span className="currency"> USDT</span>
            </h3>
            <h4 className="conversionSingle">(<USDTtoFTM usdt={balanceUSDT} fixed={8}/> FTM)</h4>
            <p>MoneyBox Balance</p> 
        </div> 
        <div className="float-right widget-icon">
            <BalanceIcon />
        </div>
    </div>;
});