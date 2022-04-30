import React from "react";
import { Loading, OrderIcon } from "resources/svg";

const OrderCountView = ({ count }: { count: number|undefined }) => {
    return <div className="widget">
        <div className="float-left widget-text">
            <h3>
                <span className="count">{count||<Loading width="60" height="60"/>}</span>
            </h3>
            <p>Orders</p> 
        </div>
        <div className="float-right widget-icon">
            <OrderIcon />
        </div>
    </div>;
};


export default OrderCountView;