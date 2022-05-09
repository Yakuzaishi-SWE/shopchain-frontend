import { observer } from "mobx-react-lite";
import React from "react";
import { Loading, OrderIcon, SingleOrder } from "resources/svg";
import IOrderCountViewModel from "./IOrderCountViewModel";


export default observer(function OrderCountView({ count, isBusy }: IOrderCountViewModel) {
    return <div className="widget">
        <div className="float-left widget-text">
            <h3>
                <span className="count">{isBusy ? <Loading width="60" height="60" /> : count}</span>
            </h3>
            <p>Orders</p>
        </div>
        <div className="float-right widget-icon">
            <SingleOrder />
        </div>
    </div>;
});