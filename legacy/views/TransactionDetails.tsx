import React, { useMemo } from "react";
import { OrderStateEnum } from "types/enums";
import { OrderStateToStr, WeitoFTM } from "utils";

const TransactionDetailsView = ({ order, id, onUnlock, onRefund }: { order: IOrder, id: string, onUnlock: () => void, onRefund: () => void }) => {
    const canUnlock = useMemo(() => order.state === OrderStateEnum.FILLED, [order, id]);
    const canRefund = useMemo(() => order.state === OrderStateEnum.FILLED, [order, id]);

    return <><section className="transaction-details">
        <ul>
            <li><div className="section-head">Transaction ID:</div>{id}</li>
            <li><div className="section-head">Order Owner:</div>{order.ownerAddress}</li>
            <li><div className="section-head">Payed To:</div>{order.sellerAddress}</li>
            <li><div className="section-head">Amount:</div>{WeitoFTM(order.amount)} FTM ({order.amount} wei)</li>
            <li><div className="section-head">State:</div>{OrderStateToStr[order.state]}</li>
        </ul>
    </section>
    <div className="box-button">
        <button id="unlock" onClick={onUnlock} disabled={!canUnlock}>Unlock</button>
        <button id="refund" onClick={onRefund} disabled={!canRefund}>Refund</button>
    </div>
    </>;
};

export default TransactionDetailsView;