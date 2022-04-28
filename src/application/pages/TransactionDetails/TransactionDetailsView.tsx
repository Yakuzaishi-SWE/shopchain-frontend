import { observer } from "mobx-react-lite";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { OrderStateEnum } from "types/enums";
import { OrderStateToStr, WeitoFTM } from "utils";
import ITransactionDetailsViewModel from "./ITransactionDetailsViewModel";

export default observer(function TransactionDetailsView({ id, ownerAddress, sellerAddress, amount, state }: ITransactionDetailsViewModel) {

    return <><section className="transaction-details">
        <ul>
            <li><div className="section-head">Transaction ID:</div>{id}</li>
            <li><div className="section-head">Order Owner:</div>{ownerAddress}</li>
            <li><div className="section-head">Payed To:</div>{sellerAddress}</li>
            <li><div className="section-head">Amount:</div>{WeitoFTM(amount)} FTM ({amount} wei)</li>
            <li><div className="section-head">State:</div>{OrderStateToStr[state]}</li>
        </ul>

        <div className="box-button">
            <button id="unlock" onClick={onUnlock} disabled={!isPaid}>Unlock</button>
            <button id="refund" onClick={onRefund} disabled={!isPaid}>Refund</button>
        </div>

    </section>
    <div className="simple-link">
        <Link to="/transaction/out/" >Go back to your transactions</Link>
    </div>
    </>;
});