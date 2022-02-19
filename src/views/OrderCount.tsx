import React from "react";
import { OrderIcon } from "resources/svg";

const OrderCountView = ({ count }: { count: number }) => {
    return <div className="widget">
        <div className="float-left widget-text">
            <h3>
            <span className="count">{count}</span>
            </h3>
            <p>Orders</p> 
        </div>
        <div className="float-right widget-big">
            <OrderIcon />
        </div>
    </div>;
};


export default OrderCountView;