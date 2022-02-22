import TransactionListController from "controllers/TransactionList";
import React from "react";
import { OrderState } from "types/enums";


const TransactionsOutPage = () => {
    return <>
        <h1>Your Locked Transactions</h1>
        <TransactionListController from={"buyer"} state={OrderState.FILLED}/>

        <h1>Your Unlocked Transactions</h1>
        <TransactionListController from={"buyer"} state={OrderState.CLOSED}/>
    </>;
};


export default TransactionsOutPage;