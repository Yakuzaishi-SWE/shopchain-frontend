import { observer } from "mobx-react-lite";
import { useViewModel } from "application/utils/useViewModel"
import TransactionListViewModel from "./TransactionListViewModel";
import RootStore from "core/shared/RootStore";
import ProviderStore, { providerStore } from "core/provider/store/ProviderStore";
import TransactionListView from "./TransactionListView";
import React from "react";

export default observer(function TransactionListController() {
    const vm = useViewModel(TransactionListViewModel, RootStore.getInstance(), providerStore);
    return <TransactionListView
        transactions={vm.transactions}
    />

});