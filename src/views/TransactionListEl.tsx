import React from "react";
import { Lock, MoneyOff, MoneyOn, Unlock } from "resources/svg";

enum OrderState {
    NOT_CREATED = "0",
    CREATED = "1",
    FILLED = "2",
    CLOSED = "3",
    CANCELLED = "4",
}

const TransactionListElView = ({ transaction, id }: { transaction: IOrder, id: string }) => {
    return <li>
        <div>
            <span className="transaction-id">{id}</span>
            <div>
                <button className="btn-paid">{transaction.state > 1 ? <MoneyOn /> : <MoneyOff />}</button>
                <button className="btn-unlock">{transaction.state === OrderState.FILLED ? <Lock /> : <Unlock />}</button>
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

    </li>
}

export default TransactionListElView;