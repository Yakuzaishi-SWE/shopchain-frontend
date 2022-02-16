import { useOrderCount } from "hooks";
import React from "react";
import { OrderCountView } from "views";

const OrderCountController =  () => {
    const {count, loaded, error} = useOrderCount();

    return <OrderCountView count={count || 0}/>;
};

export default OrderCountController;