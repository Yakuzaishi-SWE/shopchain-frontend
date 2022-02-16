import React from "react";

const OrderCountView = ({ count }: { count: number }) => {
    return <div>
        {count} Orders
    </div>;
};

export default OrderCountView;