import React from "react";

const TransactionListElView = ({ transaction, id }: { transaction: IOrder, id: string }) => {
    return <li>
            <div>
                <span className="transaction-id">{id}</span>
                <div>
                    <button className="btn-paid">Paid/Unpaid</button>
                    <button className="btn-unlock">Lock/Unlock</button>
                </div>
            </div>
            <div>
                <div className="info-box">
                    <span className="transaction-label">Seller</span>
                    <span className="addr">{transaction.sellerAddress}</span>
                </div>
                <div className="info-box">
                    <span className="transaction-label">Amount</span>
                    <span className="transaction-amount">{Math.floor(transaction.amount*100/1e18)/100 } FTM</span>
                </div>
            </div>
            
    </li>
}

export default TransactionListElView;