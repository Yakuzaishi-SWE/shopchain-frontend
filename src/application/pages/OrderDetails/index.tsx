import { useViewModel } from "application/utils/useViewModel";
import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderDetailsView from "./OrderDetailsView";
import OrderDetailsViewModel from "./OrderDetailsViewModel";

export default observer(function OrderDetails() {
    const vm = useViewModel(OrderDetailsViewModel, RootStore.getInstance(), ProviderStore.getInstance());
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) vm.setOrderId(id);
    }, [id]);


    

    return <OrderDetailsView
        id={vm.id}
        ownerAddress={vm.ownerAddress}
        sellerAddress={vm.sellerAddress}
        ftm={vm.ftm}
        wei={vm.wei}
        state={vm.state}
        isPaid={vm.isPaid}
        unlock={vm.unlock}
        refund={vm.refund}
        back={vm.back}
        isOwner={vm.isOwner}
        isSeller={vm.isSeller}
        date={vm.date}
    />;
});
