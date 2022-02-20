import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Launch, Lock, MoneyOff, MoneyOn, Unlock } from "resources/svg";
import { OrderState } from "types/enums";

const TransactionListElView = ({ transaction, id, onUnlock }: { transaction: IOrder, id: string, onUnlock: () => void }) => {
    const paid = useMemo(() => transaction.state === OrderState.FILLED || transaction.state === OrderState.CLOSED, [transaction, id]);
    const unlocked = useMemo(() => transaction.state === OrderState.CLOSED, [transaction, id]);

    return <li>
        <div>
            <span className="transaction-id">{id}</span>
            <div>
                <Link to={`/transaction/t/${id}/`} className="btn-linkto"><Launch /></Link>
                <button className={"btn-paid" + (paid ? " success" : " error")}>{paid ? <MoneyOn /> : <MoneyOff />}</button>
                <button className={"btn-unlock" + (unlocked ? " success" : " error")} onClick={onUnlock}>{unlocked ? <Unlock /> : <Lock />}</button>
            </div>
        </div>
        <div>
            <div className="info-box">
                <span className="transaction-label">Seller</span>
                <span className="addr">{transaction.sellerAddress}</span>
            </div>
            <div className="info-box">
                <span className="transaction-label">Amount</span>
                <span className="transaction-amount">{Math.floor(transaction.amount * 100 / 1e18) / 100} FTM</span>
            </div>
        </div>

    </li>;
};

export default TransactionListElView;