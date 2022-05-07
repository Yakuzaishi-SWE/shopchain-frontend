import { useViewModel } from "application/utils/useViewModel";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router";
import PickAmountView from "./PickAmountView";
import PickAmountViewModel from "./PickAmountViewModel";


export default observer(function PickAmount() {
    const vm = useViewModel(PickAmountViewModel, RootStore.getInstance());

    const { id } = useParams<{ id: string }>();
    const { search } = useLocation();
    const amount = useMemo(() => new URLSearchParams(search).get("amount"), [search]) || "0";

    useEffect (() => {
        if(amount) vm.setAmount(amount);
    },[amount]);

    useEffect (() => {
        if(id) vm.setId(id);
    },[id]);

    return <PickAmountView 
        id={vm.id}
        initFTM={vm.initFTM}
        initWei={vm.initWei}
        createMoneyBox={vm.createMoneyBox}
        setInitFTM={vm.setInitFTM}
        back={vm.back}
    />;
});