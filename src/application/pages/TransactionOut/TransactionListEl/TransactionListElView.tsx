import USDTtoFTM from "application/utils/USDTtoFTM";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { Launch, Lock, MoneyOff, MoneyOn, PiggyBank, SingleOrder, Unlock } from "resources/svg";
import ITransactionListElViewModel from "./ITransactionListElViewModel";

const TransactionListElView = observer(({
    isPaid,
    isUnlocked,
    isRefunded,
    id,
    transaction,
    orderType,
}: ITransactionListElViewModel) => {

    return <li>
        <article className="transaction">
            <header>
                <span className="transaction-id">
                    <Link to={"/out/"+orderType+"/"+id+"/"}  className="btn-linkto">{id}<Launch /></Link>
                </span>

                <div className="transaction-controls">
                    {orderType == "order" ?
                        <SingleOrder className={"transaction-type " + orderType + "-type"} /> :
                        <PiggyBank className={"transaction-type " + orderType + "-type"} />
                    }                    
                    <button className={"icon-btn btn-paid" + ((isPaid || isUnlocked) ? " success" : (isRefunded ? " error" : " warning"))} disabled={true}>{(isPaid || isUnlocked) ? <MoneyOn /> : <MoneyOff />}</button>
                    <button className={"icon-btn btn-unlock" + (isUnlocked ? " success" : " warning")} disabled={true}>{isUnlocked ? <Unlock /> : <Lock />}</button>
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
                        isUnlocked ?
                            <span>UNLOCKED</span>
                            :
                            <div className="amount-box">
                                <span className="transaction-label">Amount</span>
                                <br />
                                <span className="transaction-amount">{transaction.amount.USDT} USDT</span>
                                <br />
                                <span className="transaction-amount">(<USDTtoFTM usdt={transaction.amount.USDT}/> FTM)</span>
                            </div>
                }
                </div>
            </div>
        </article>
    </li>;
});

export default TransactionListElView;