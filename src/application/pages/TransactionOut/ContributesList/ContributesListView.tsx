import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Launch } from "resources/svg";
import IContributesListViewModel from "./IContributesListViewModel";

export default observer(function ContributesListView({
    moneyBoxesContributed,
    getContributesFromMoneyBox,
    dateNtime,
}: IContributesListViewModel) {
    return <>
        <ul className="transaction-list">
            {moneyBoxesContributed && moneyBoxesContributed.map(moneybox =>
                <li>
                    <article className="contribute">
                        <header>
                            <span className="transaction-id">
                                <Link to={"/out/moneybox/"+moneybox.id+"/"}  className="btn-linkto">{moneybox.id}<Launch/></Link>
                            </span>
                            <span className="transaction-state">
                                State: {moneybox.state.toString()}
                            </span>
                        </header>

                        <table>
                            <thead>
                                <tr>
                                    <th>Paid Amount</th>
                                    <th>Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getContributesFromMoneyBox(moneybox).map(contribute =>
                                    <>
                                        <tr key={contribute.timestamp}>
                                            <td>{contribute.amount.FTM} FTM</td>
                                            <td>{dateNtime(contribute)}</td>
                                        </tr>
                                    </>
                                )}
                            </tbody>
                        </table>

                    </article>
                </li>
            )}
        </ul>
    </>;
});
