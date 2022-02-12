import React from "react";

const TransactionDetailsView = ({ order, id, onUnlock }: { order: IOrder, id: string, onUnlock: () => void }) => {
    return <section>
        <div>
            <span>Transaction ID:</span>
            <span>{id}</span>
        </div>
        <div>
            <span>Order Owner:</span>
            <span>{order.ownerAddress}</span>
        </div>
        <div>
            <span>Payed To:</span>
            <span>{order.sellerAddress}</span>
        </div>
        <div>
            <span>Amount:</span>
            <span>{Math.floor(order.amount*100/1e18)/100 }</span>
        </div>
        <div>
            <span>State:</span>
            <span>{order.state}</span>
        </div>
        <button onClick={onUnlock}>unlock</button>
    </section>;
}

export default TransactionDetailsView;