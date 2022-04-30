import { useViewModel } from "application/utils/useViewModel";
import { providerStore } from "core/provider/store/ProviderStore";
import { observer } from "mobx-react-lite";
import React from "react";
import ECommerceView from "./ECommerceView";
import ECommerceViewModel from "./ECommerceViewModel";

export default observer(function ECommerce() {
    const vm = useViewModel(ECommerceViewModel, providerStore);

    return <ECommerceView 
        amount = {vm.amount}
        wei = {vm.wei}
        id = {vm.id}
        setId = {vm.setId}
        setAmount = {vm.setAmount}
        handleSubmit = {vm.handleSubmit}
        redirectLink = {vm.redirectLink}
    />;
})