import { useViewModel } from "application/utils/useViewModel";
import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";
import ContributesListView from "./ContributesListView";
import ContributesListViewModel from "./ContributesListViewModel";

export default observer(function ContributesListController() {
    const vm = useViewModel(ContributesListViewModel, RootStore.getInstance(), ProviderStore.getInstance());
    
    return <ContributesListView
        moneyBoxesContributed={vm.moneyBoxesContributed}
        getContributesFromMoneyBox={vm.getContributesFromMoneyBox}
        dateNtime={vm.dateNtime}
    />;
});
