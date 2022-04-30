import { useLoadingWrap, useSmartContract } from "hooks";
import React, { useEffect } from "react";
import { BalanceView } from "views";

const BalanceController = () => {
    const [contract, { getContractBalance }] = useSmartContract();
    const { error, loaded, result: balance, startLoading, setResult, setError } = useLoadingWrap<number>();

    useEffect(() => {
        startLoading();
        getContractBalance()
            .then(v => setResult(v))
            .catch(err => setError(err));
    }, [contract]);

    return <BalanceView balance={balance} />;
};

export default BalanceController;