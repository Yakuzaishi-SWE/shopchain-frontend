import { observer } from "mobx-react-lite";
import React from "react";
import IContributesListViewModel from "./IContributesListViewModel";

export default observer(function PaymentsListView({
    contributes,
    dateNtime,
}: IContributesListViewModel) {
    return <>
        <table id="table-payments">
            <thead>
                <tr>
                    <th>MoneyBox ID</th>
                    <th>Paid Amount</th>
                    <th>Timestamp</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {contributes && contributes.map(moneybox =>
                    <tr key={moneybox.from}>
                        <td>{moneybox.from}</td>
                        <td>{moneybox.amount.FTM}</td>
                        <td>{dateNtime(moneybox)}</td>
                    </tr>
                )}
            </tbody>
        </table>        
    </>;
});
