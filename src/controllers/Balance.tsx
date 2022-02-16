import { useContractBalance } from "hooks";
import React, { useEffect } from "react";
import { BalanceView } from "views";

const BalanceController =  () => {
    const {balance, loaded, error} = useContractBalance();

    return <BalanceView balance={balance || 0}/>;
};

export default BalanceController;