import React from "react";

const TransactionListElView = ({ transaction, id }: { transaction: IOrder, id: string }) => {
    return <li>
        <div>
            <div>
                <span>{id}</span>
                <span>
                    <button>Paid/Unpaid</button>
                    <button>Lock/Unlock</button>
                </span>
            </div>
            <div>

            </div>
        </div>
    </li>
}

export default TransactionListElView;