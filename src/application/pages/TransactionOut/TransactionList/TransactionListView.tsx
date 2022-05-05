import { observer } from "mobx-react-lite";
import React from "react";
import ITransactionListViewModel from "./ITransactionListViewModel";
import TransactionListElController from "../TransactionListEl/TransactionListElController";

export default observer(function TransactionListView({ transactionsFilter, stateFilter, setStateFilter, typeFilter, setTypeFilter }: ITransactionListViewModel) {
    return <>
        <span>
            <label>Order Type</label>
            <select id="type-dropdown" onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="" selected>All</option>
                <option value="ORDER">Single Payment</option>
                <option value="MONEYBOX">MoneyBox</option>
            </select>
        </span>
        <span>
            <label>Order State</label>
            <select id="state-dropdown" onChange={(e) => setStateFilter(e.target.value)}>
                <option value="" selected>All</option>
                <option value="Paid">Paid but Locked</option>
                <option value="Unlocked">Unlocked</option>
                <option value="Refunded">Refunded</option>
            </select>
        </span>
        
        <ul className="transaction-list">
            {transactionsFilter(stateFilter, typeFilter).map(el => <TransactionListElController key={el.id} order={el} />)}
        </ul>
    </>;
});
