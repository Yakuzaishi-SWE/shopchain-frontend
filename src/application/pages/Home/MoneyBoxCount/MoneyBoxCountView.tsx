import { observer } from "mobx-react-lite";
import React from "react";
import { Loading, OrderIcon } from "resources/svg";
import IMoneyBoxCountViewModel from "./IMoneyBoxCountViewModel";


export default observer(function MoneyBoxCountView({ count, isBusy }: IMoneyBoxCountViewModel) {
    return <div className="widget">
        <div className="float-left widget-text">
            <h3>
                <span className="count">{isBusy ? <Loading width="60" height="60" /> : count}</span>
            </h3>
            <p>MoneyBox</p>
        </div>
        <div className="float-right widget-icon">
            <OrderIcon />
        </div>
    </div>;
});