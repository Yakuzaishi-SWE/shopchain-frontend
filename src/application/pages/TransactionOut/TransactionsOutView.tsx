import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { BackArrowIcon } from "resources/svg";
import TransactionListController from "./TransactionList/TransactionListController";

export default observer(function TransactionOutView() {
    return <>
        <div className="simple-link fixed-top-left">
            <Link to="/"><BackArrowIcon className="svg-white"/>Go back to homepage</Link>
        </div>
        <div className="page-container">
            <div className="left-col">
                <h1 className="center">Your Transactions</h1>
                <TransactionListController />
            </div>

            <div className="right-col">
                <h1>Your contributes</h1>
                <table id="table-payments">
                    <thead>
                        <tr>
                            <th>MoneyBox Id</th>
                            <th>Paid Amount</th>
                            <th>Timestamp</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="">e3632b70-65de-465f-b0eb-94bafd32999a</a></td>
                            <td>1 FTM</td>
                            <td>05/12/2023</td>
                            <td>Open</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
    </>;
});