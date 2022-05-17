import { useViewModel } from "application/utils/useViewModel";
import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";
import TransactionListView from "./TransactionListView";
import TransactionListViewModel from "./TransactionListViewModel";

export default observer(function TransactionListController() {
    const vm = useViewModel(TransactionListViewModel, RootStore.getInstance(), ProviderStore.getInstance());
    
    return <TransactionListView
        //transactions={vm.transactions}
        filtered_transactions={vm.filtered_transactions}
        stateFilter={vm.stateFilter}
        typeFilter={vm.typeFilter}
        setStateFilter={vm.setStateFilter}
        setTypeFilter={vm.setTypeFilter}
    />;
});