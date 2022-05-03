// import TransactionListView from "application/pages/TransactionOut/TransactionList/TransactionListView";
// import TransactionListViewModel from "application/pages/TransactionOut/TransactionList/TransactionListViewModel";
import { useViewModel } from "application/utils/useViewModel";
import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";

export default observer(function TransactionListController() {
    const vm = useViewModel(TransactionListViewModel, RootStore.getInstance(), providerStore);
    
    return <TransactionListView
        transactions={vm.transactions}
    />;
});