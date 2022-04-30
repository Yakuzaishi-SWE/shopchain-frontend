import React from "react";
import { OrderStateEnum } from "types/enums";
import TransactionListController from "./TransactionList/TransactionListController";

const TransactionsOutPage = () => {
    return <>
        <h1>Your Locked Transactions</h1>
        <TransactionListController from={"buyer"} state={OrderStateEnum.FILLED} />

        <h1>Your Unlocked Transactions</h1>
        <TransactionListController from={"buyer"} state={OrderStateEnum.CLOSED} />
    </>;
};


export default TransactionsOutPage;