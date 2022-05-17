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

    useEffect(() => {
        if(vm.canReload) window.location.reload();
    }, [vm.canReload]);

    //if (!id) return <Navigate to="/transaction/out/" />;

    return <MoneyBoxDetailsView 
        id={vm.id}
        ownerAddress={vm.ownerAddress}
        sellerAddress={vm.sellerAddress}
        ftm={vm.ftm}
        wei={vm.wei}
        filledFtm={vm.filledFtm}
        filledWei={vm.filledWei}
        ftmToFill={vm.ftmToFill}
        weiToFill={vm.weiToFill}
        state={vm.state}
        isPaid={vm.isPaid}
        isUnlocked={vm.isUnlocked}
        isRefunded={vm.isRefunded}
        unlock={vm.unlock}
        refund={vm.refund}
        feeAmountFtm={vm.feeAmountFtm}
        feeAmountWei={vm.feeAmountWei}
        setFeeAmount={vm.setFeeAmount}
        newPayment={vm.newPayment}
        partecipants={vm.partecipants}
        dateNtime={vm.dateNtime}
        back={vm.back}
        isOwner={vm.isOwner}
        isSeller={vm.isSeller}
        date={vm.date}
        isBusy={vm.isBusy}
        unlockCode={vm.unlockCode}
        code={vm.code}
        setCode={vm.setCode}
        canReload={vm.canReload}
    />;

});
