import React from "react";

const BalanceView = ({ balance }: { balance: number }) => {
    return <div>
        {Math.floor(balance*10000/1e18)/10000} FTM
        ({balance} wei)
    </div>;
};

export default BalanceView;