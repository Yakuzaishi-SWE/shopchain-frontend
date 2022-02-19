import React from "react";
import { BalanceIcon } from "resources/svg";

const BalanceView = ({ balance }: { balance: number }) => {
    return <div className="widget">
        <div className="float-left widget-text">
            <h3>
                <span className="count"> {Math.floor(balance*10000/1e18)/10000}</span> 
                <span className="currency">FTM</span>
            </h3>
            <p>Contract Balance</p> 
        </div> 
        <div className="float-right widget-big">
            <BalanceIcon />
        </div>
    </div>;
};

export default BalanceView;