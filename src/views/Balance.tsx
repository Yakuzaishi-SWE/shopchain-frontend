import React from "react";
import { BalanceIcon } from "resources/svg";

const BalanceView = ({ balance }: { balance: number }) => {
    return <div className="widget">
        <div className="widget-big">
            <BalanceIcon />
            <span> {Math.floor(balance*10000/1e18)/10000} FTM</span>
        </div> 
        <span className="widget-text">
        Contract Balance
        </span> 
    </div>;
};

export default BalanceView;