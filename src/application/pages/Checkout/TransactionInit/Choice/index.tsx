import { useViewModel } from "application/utils/useViewModel";
import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router";
import ChoiceView from "./ChoiceView";
import ChoiceViewModel from "./ChoiceViewModel";

export default observer(function Choice() {
    const vm = useViewModel(ChoiceViewModel, providerStore, RootStore.getInstance());

    //if (!vm.id) return <Navigate to="/transaction/init/" />;

    const { id } = useParams<{ id: string }>();
    const { search } = useLocation();
    const amount = useMemo(() => new URLSearchParams(search).get("amount"), [search]) || "0";

    useEffect (() => {
        if(amount) vm.setAmount(amount);
    },[amount]);

    useEffect (() => {
        if(id) vm.setId(id);
    },[id]);

    return <ChoiceView
        createOrder = {vm.createOrder}
    />;
});