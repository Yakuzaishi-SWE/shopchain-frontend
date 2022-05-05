import { observer } from "mobx-react-lite";
import React from "react";
import ITransactionListViewModel from "./ITransactionListViewModel";
import TransactionListElController from "../TransactionListEl/TransactionListElController";

export default observer(function TransactionListView({ transactionsFilter, stateFilter, setStateFilter, typeFilter, setTypeFilter }: ITransactionListViewModel) {
    return <>
        <div className="center filter">
            <div>
                <label>Order Type</label>
                <select defaultValue={""} id="type-dropdown" onChange={(e) => setTypeFilter(e.target.value)}>
                    <option value="" selected>All</option>
                    <option value="ORDER">Single Payment</option>
                    <option value="MONEYBOX">MoneyBox</option>
                </select>
            </div>

            <div>
                <label>Order State</label>
                <select defaultValue={""} id="type-dropdown" onChange={(e) => setStateFilter(e.target.value)}>
                    <option value="" selected>All</option>
                    <option value="Paid">Paid but Locked</option>
                    <option value="Unlocked">Unlocked</option>
                    <option value="Refunded">Refunded</option>
                </select>
            </div>
        </div>
        
        <ul className="transaction-list">
            {transactionsFilter(stateFilter, typeFilter).map(el => <TransactionListElController key={el.id} order={el} />)}
        </ul>
    </>;
});
