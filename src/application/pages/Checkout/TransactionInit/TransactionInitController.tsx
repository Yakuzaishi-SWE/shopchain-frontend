import { useViewModel } from "application/utils/useViewModel";
import ProviderStore from "core/provider/store/ProviderStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { Navigate } from "react-router";
import TransactionInitView from "./TransactionInitView";
import TransactionInitViewModel from "./TransactionInitViewModel";

export default observer(function TransactionInit() {
    const vm = useViewModel(TransactionInitViewModel, ProviderStore.arguments);

    if (!vm.id) return <Navigate to="/transaction/init/" />;

    return <TransactionInitView 
        loaded = {vm.loaded}
        error = {vm.error}
        id = {vm.id}
        order = {vm.order}
    />;
})