import React from "react";

const TransactionDetailsView = ({ order, id, onUnlock }: { order: IOrder, id: string, onUnlock: () => void }) => {
    return <><section>
        <ul>
            <li><div className="section-head">Transaction ID:</div>{id}</li>
        <li><div className="section-head">Order Owner:</div>{order.ownerAddress}</li>
        <li><div className="section-head">Payed To:</div>{order.sellerAddress}</li>
        <li><div className="section-head">Amount:{Math.floor(order.amount*100/1e18)/100 }</div></li>
            <li><div className="section-head">State:{order.state}</div></li>
        </ul>
    </section>
    <div className="box-button center">
        <button id="unlock" onClick={onUnlock}>Unlock</button>
    </div>
    </>;
}

export default TransactionDetailsView;