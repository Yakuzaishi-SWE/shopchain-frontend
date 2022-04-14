import TransactionListController from "controllers/TransactionList";
import React from "react";
import { OrderStateEnum } from "types/enums";


const TransactionsOutPage = () => {
    return <>
        <h1>Your Locked Transactions</h1>
        <TransactionListController from={"buyer"} state={OrderStateEnum.FILLED}/>

        <h1>Your Unlocked Transactions</h1>
        <TransactionListController from={"buyer"} state={OrderStateEnum.CLOSED}/>
    </>;
};


export default TransactionsOutPage;