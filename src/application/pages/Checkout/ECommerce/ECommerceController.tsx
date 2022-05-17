import { useViewModel } from "application/utils/useViewModel";
import { providerStore } from "core/provider/store/ProviderStore";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import ECommerceView from "./ECommerceView";
import ECommerceViewModel from "./ECommerceViewModel";

export default observer(function ECommerce() {
    const vm = useViewModel(ECommerceViewModel, providerStore);
    const navigate = useNavigate();

    useEffect(() =>{
        if (vm.redirectLink)
            navigate(vm.redirectLink);
    }, [vm.redirectLink]);

    return <ECommerceView 
        amount = {vm.amount}
        wei = {vm.wei}
        id = {vm.id}
        setAmount = {vm.setAmount}
        handleSubmit = {vm.handleSubmit}
    />;
});