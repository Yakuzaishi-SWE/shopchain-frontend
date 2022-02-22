import React from "react";
import { BalanceIcon, Loading } from "resources/svg";
import { WeitoFTM } from "utils";

const BalanceView = ({ balance }: { balance: number|undefined }) => {
    return <div className="widget">
        <div className="float-left widget-text">
            <h3>
                <span className="count"> {balance ? WeitoFTM(balance, 4) : <Loading width="60" height="60"/>}</span> 
                <span className="currency">FTM</span>
            </h3>
            <p>Contract Balance</p> 
        </div> 
        <div className="float-right widget-icon">
            <BalanceIcon />
        </div>
    </div>;
};

export default BalanceView;