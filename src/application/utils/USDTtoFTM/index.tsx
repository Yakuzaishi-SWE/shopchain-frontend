import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Loading } from "resources/svg";
import { useViewModel } from "../useViewModel";
import USDTtoFTMViewModel from "./USDTtoFTMViewModel";



export default observer(function USDtoFTM({usdt}: { usdt: number }) {
    const vm = useViewModel(USDTtoFTMViewModel);

    useEffect(() => {
        vm.setUSDT(usdt);
    }, [usdt]);

    if (vm.isLoaded) return vm.value;
    else return <Loading/>;
}); 