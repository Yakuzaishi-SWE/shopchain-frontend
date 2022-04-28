import { observer } from "mobx-react";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Launch, Lock, MoneyOff, MoneyOn, Unlock } from "resources/svg";
import { OrderStateEnum } from "types/enums";

const TransactionListElView = observer(({
    isPaid
}: ITransactionListElViewModel) => {
    // const paid = useMemo(() => transaction.state === OrderStateEnum.FILLED || transaction.state === OrderStateEnum.CLOSED, [transaction, id]);
    // const unlocked = useMemo(() => transaction.state === OrderStateEnum.CLOSED, [transaction, id]);
    // const refunded = useMemo(() => transaction.state === OrderStateEnum.CANCELLED, [transaction, id]);
    // const canPay = useMemo(() => from !== "seller" && transaction.state === OrderStateEnum.CREATED, [transaction, id]);
    // const canUnlock = useMemo(() => from !== "seller" && transaction.state === OrderStateEnum.FILLED, [transaction, id]);
    // const canRefund = useMemo(() => from !== "seller" && transaction.state === OrderStateEnum.FILLED, [transaction, id]);

    return <li>
        <article className="transaction">
            <header>
                <span className="transaction-id">
                    <Link to={`/transaction/out/${id}/`} className="btn-linkto">{id}<Launch /></Link>
                </span>
                <div className="transaction-controls">
                    <button className={"icon-btn btn-paid" + (paid ? " success" : (refunded ? " error" : " warning"))} disabled={!canPay}>{paid ? <MoneyOn /> : <MoneyOff />}</button>
                    <button className={"icon-btn btn-unlock" + (unlocked ? " success" : " warning")} disabled={!canRefund} onClick={onUnlock}>{unlocked ? <Unlock /> : <Lock />}</button>
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
                        transaction.state === OrderStateEnum.CANCELLED ?
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