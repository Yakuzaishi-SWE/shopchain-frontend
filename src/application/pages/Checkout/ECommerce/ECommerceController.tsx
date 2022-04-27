import { useViewModel } from "application/utils/useViewModel";
import ProviderStore from "core/provider/store/ProviderStore";
import { observer } from "mobx-react-lite";
import React, { useMemo, useState } from "react";
import { v4 } from "uuid";
import { FTMtoWei } from "utils";
import Decimal from "decimal.js";
import ECommerceView from "./ECommerceView";
import ECommerceViewModel from "./ECommerceViewModel";

export default observer(function ECommerce() {
    const vm = useViewModel(ECommerceViewModel, ProviderStore.arguments);

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