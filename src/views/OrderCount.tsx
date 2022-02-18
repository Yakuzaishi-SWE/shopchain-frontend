import React from "react";
import { OrderIcon } from "resources/svg";

const OrderCountView = ({ count }: { count: number }) => {
    return <div className="widget">
        <div className="widget-big">
            <OrderIcon />
            <span>{count}</span>
        </div> 
        <span className="widget-text">
        Orders
        </span> 
    </div>;
};

export default OrderCountView;