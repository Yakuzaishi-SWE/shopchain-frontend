import { useLoadingWrap, useSmartContract } from "hooks";
import React, { useEffect } from "react";
import { OrderCountView } from "views";

const OrderCountController =  () => {
    const [contract, {getOrderCount}] = useSmartContract();
    const { error, loaded, result: count, startLoading, setResult, setError } = useLoadingWrap<number>({onResult: (d) => {console.log(d);}, onError: (err )=> console.error(err)});

    useEffect(() => {
        startLoading();
        getOrderCount()
            .then(v => setResult(v))
            .catch(err => setError(err));
    }, [contract]);

    return <OrderCountView count={count || 0}/>;
};

export default OrderCountController;