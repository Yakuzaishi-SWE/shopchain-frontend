import React from "react";

const TransactionInitView = ({ transaction, id, onCreate }: { transaction: ITransaction, id: string, onCreate: () => void }) => {
    return <section>
        <header>Transaction Details</header>
        <div>
            <span>Transaction id:</span>
            <span>{id}</span>
        </div>
        <div>
            <span>Transaction seller:</span>
            <span>{transaction.seller}</span>
        </div>
        <div>
            <span>Amount to pay:</span>
            <span>{transaction.amount}</span>
        </div>
        <button onClick={onCreate}>Pay Alone</button>
        <button disabled>Create Money Box</button>
    </section>;
}

export default TransactionInitView;