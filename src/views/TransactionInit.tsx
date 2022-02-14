import React from "react";

const TransactionInitView = ({ transaction, id, onCreate }: { transaction: ITransaction, id: string, onCreate: () => void }) => {
    return <><section>
        <header>Transaction Details</header>
        <hr/>
        <ul>
            <li>
                <div className="section-head">Transaction id:</div>{id}
            </li>
            <li>
                <div className="section-head">Transaction seller:</div>
                {transaction.seller}
            </li>
            <li>
                <div className="section-head">Amount to pay:</div>{transaction.amount} FTM
            </li>
        </ul>
    </section>
    <div className="box-button center">
        <button onClick={onCreate} className="payAlone">Pay Alone</button>
        <button className="moneyBox" disabled>Create Money Box</button>
    </div>
    </>;
}

export default TransactionInitView;