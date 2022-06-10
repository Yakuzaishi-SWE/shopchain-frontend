import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Loading } from "resources/svg";
import { useViewModel } from "../useViewModel";
import USDTtoFTMViewModel from "./USDTtoFTMViewModel";



export default observer(function USDTtoFTM({usdt}: { usdt: number }) : any {
    const vm = useViewModel(USDTtoFTMViewModel);

    useEffect(() => {
        vm.setUSDT(usdt);
    }, [vm.setUSDT, usdt]);

    if (vm.isLoaded) return <>{vm.value?.toString()}</>;
    else return <Loading/>;
}); 