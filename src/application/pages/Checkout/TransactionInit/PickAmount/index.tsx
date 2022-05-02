import { useViewModel } from "application/utils/useViewModel";
import { observer } from "mobx-react-lite";
import React from "react";
import PickAmountView from "./PickAmountView";
import PickAmountViewModel from "./PickAmountViewModel";


export default observer(function PickAmount() {
    const vm = useViewModel(PickAmountViewModel);

    return <PickAmountView 
        amount={vm.amount}
        wei={vm.wei}
        createMoneyBox={vm.createMoneyBox}
        setFTM={vm.setFTM}
    />;
});