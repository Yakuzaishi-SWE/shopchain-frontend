import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Launch, Lock, MoneyOff, MoneyOn, Unlock } from "resources/svg";
import { OrderState } from "types/enums";

const TransactionListElView = ({ transaction, id, onUnlock, from }: { from: "seller" | "buyer", transaction: IOrder, id: string, onUnlock: () => void }) => {
    const paid = useMemo(() => transaction.state === OrderState.FILLED || transaction.state === OrderState.CLOSED, [transaction, id]);
    const unlocked = useMemo(() => transaction.state === OrderState.CLOSED, [transaction, id]);
    const refunded = useMemo(() => transaction.state === OrderState.CANCELLED, [transaction, id]);

    return <li>
        <article className="transaction">
            <header>
                <span className="transaction-id">
                    <Link to={`/transaction/out/${id}/`} className="btn-linkto">{id}<Launch /></Link>
                </span>
                <div className="transaction-controls">
                    <button className={"icon-btn btn-paid" + (paid ? " success" : (refunded ? " error" : " warning"))} disabled={paid}>{paid ? <MoneyOn /> : <MoneyOff />}</button>
                    <button className={"icon-btn btn-unlock" + (unlocked ? " success" : " warning")} disabled={unlocked} onClick={onUnlock}>{unlocked ? <Unlock /> : <Lock />}</button>
                </div>
            </header>
            <div className="content">
                <div className="info-box">
                    <span className="transaction-label">{from === "buyer" ? "Seller" : "Buyer"}</span>
                    <span className="addr">{from === "buyer" ? transaction.sellerAddress : transaction.ownerAddress}</span>
                </div>
                <div className="info-box">
                    <span className="transaction-label">Amount</span>
                    {
                        transaction.state === OrderState.CANCELLED ?
                            <span>REFUNDED</span> :
                            <></>
                    }
                    <span className="transaction-amount">{Math.floor(transaction.amount * 100 / 1e18) / 100} FTM</span>
                </div>
            </div>
        </article>

    </li>;
};

export default TransactionListElView;