import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { Launch, Lock, MoneyOff, MoneyOn, OrderIcon, Unlock } from "resources/svg";
import ITransactionListElViewModel from "./ITransactionListElViewModel";

const TransactionListElView = observer(({
    isPaid,
    isUnlocked,
    isRefunded,
    id,
    transaction,
    orderType
}: ITransactionListElViewModel) => {

    return <li>
        <article className="transaction">
            <header>
                <span className="transaction-id">
                    <Link to={`/${orderType}/${id}/`} className="btn-linkto">{id}<Launch /></Link>
                </span>
                
                <div className="transaction-controls">
                    <button className={"icon-btn btn-paid" + ((isPaid || isUnlocked) ? " success" : (isRefunded ? " error" : " warning"))} disabled={true}>{(isPaid || isUnlocked) ? <MoneyOn /> : <MoneyOff />}</button>
                    <button className={"icon-btn btn-unlock" + (isUnlocked ? " success" : " warning")} disabled={true}>{isUnlocked ? <Unlock /> : <Lock />}</button>
                    <OrderIcon className={"transaction-type " + orderType + "-type"}/> {/* sostituire con svg corretto*/}
                </div>
            </header>
            <div className="content">
                <div className="info-box">
                    {/* <span className="transaction-label">Buyer</span> */}
                    <span className="addr">{transaction.ownerAddress}</span>
                </div>
                <div className="info-box">
                    {
                        isRefunded ?
                            <span>REFUNDED</span>
                            :
                            <div className="amount-box">
                                <span className="transaction-label">Amount</span>
                                <br/>
                                <span className="transaction-amount">{transaction.amount.FTM} FTM</span>
                            </div>
                    }
                </div>
            </div>
        </article>
    </li>;
});

export default TransactionListElView;