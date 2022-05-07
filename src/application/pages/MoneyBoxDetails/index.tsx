import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MoneyBoxDetailsView from "./MoneyBoxDetailsView";
import MoneyBoxDetailsViewModel from "./MoneyBoxDetailsViewModel";

export default observer(function MoneyBoxDetails() {
    const vm = useViewModel(MoneyBoxDetailsViewModel, RootStore.getInstance());
    const { id } = useParams<{ id: string }>();
  
    useEffect(() => {
        if(id) {
            vm.setOrderId(id);
        }
    }, [id]);

    //if (!id) return <Navigate to="/transaction/out/" />;

    return <MoneyBoxDetailsView 
        id={vm.id}
        ownerAddress={vm.ownerAddress}
        sellerAddress={vm.sellerAddress}
        ftm={vm.ftm}
        wei={vm.wei}
        getFilledFtm={vm.getFilledFtm}
        getFilledWei={vm.getFilledWei}
        getFtmToFill={vm.getFtmToFill}
        getWeiToFill={vm.getWeiToFill}
        state={vm.state}
        isPaid={vm.isPaid}
        isUnlocked={vm.isUnlocked}
        isRefunded={vm.isRefunded}
        unlock={vm.unlock}
        refund={vm.refund}
        feeAmountFTM={vm.feeAmountFTM}
        feeAmountWei={vm.feeAmountWei}
        setFeeAmount={vm.setFeeAmount}
        newPayment={vm.newPayment}
        partecipants={vm.partecipants}
        dateNtime={vm.dateNtime}
        back={vm.back}
    />;

});
