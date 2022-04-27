import { useViewModel } from "application/utils/useViewModel";
import ProviderStore from "core/provider/store/ProviderStore";
import { observer } from "mobx-react-lite";
import React, { useMemo, useState } from "react";
import { v4 } from "uuid";
import { FTMtoWei } from "utils";
import Decimal from "decimal.js";
import FormView from "./ECommerceView";
import FormViewModel from "./ECommerceViewModel";

export default observer(function Form() {
    const vm = useViewModel(FormViewModel, ProviderStore.arguments);

    return <FormView 
        amount = {vm.amount}
        wei = {vm.wei}
        id = {vm.id}
        setId = {vm.setId}
        setAmount = {vm.setAmount}
        handleSubmit = {vm.handleSubmit}
        redirectLink = {vm.redirectLink}
    />;
})