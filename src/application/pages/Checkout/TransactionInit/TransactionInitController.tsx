import { useViewModel } from "application/utils/useViewModel";
import Amount from "core/modules/order/domain/Amount";
import ProviderStore, { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { useLoadingOverlay, useSmartContract } from "hooks";
import { transaction } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router";
import TransactionInitView from "./TransactionInitView";
import TransactionInitViewModel from "./TransactionInitViewModel";

export default observer(function TransactionInit() {
    const vm = useViewModel(TransactionInitViewModel, providerStore, RootStore.getInstance());

    //if (!vm.id) return <Navigate to="/transaction/init/" />;

    const { id } = useParams<{ id: string }>();
    const { search } = useLocation();
    const amount = useMemo(() => new URLSearchParams(search).get("amount"), [search]) || "0";

    useEffect (() => {
        if(amount) vm.setAmount(amount)
    },[amount])

    useEffect (() => {
        if(id) vm.setId(id)
    },[id])

    return <TransactionInitView
        id = {vm.id}
        ftm = {vm.ftm}
        wei = {vm.wei}
        sellerAddress = {vm.sellerAddress}
        createOrder = {vm.createOrder}
        createMoneyBox = {vm.createMoneyBox}
    />;
})