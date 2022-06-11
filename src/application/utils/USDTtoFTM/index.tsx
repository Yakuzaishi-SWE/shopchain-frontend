/* eslint-disable prefer-arrow-callback */
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useViewModel } from "../useViewModel";
import USDTtoFTMViewModel from "./USDTtoFTMViewModel";



export default observer(function USDTtoFTM({usdt, fixed}: { usdt: number, fixed?: number }) {
    const vm = useViewModel(USDTtoFTMViewModel);
    useEffect(() => {
        vm.setUSDT(usdt);
    }, [vm.setUSDT, usdt]);

    if (vm.isLoaded){
        if(fixed) return <>{vm.value?.toFixed(fixed).toString()}</>;
        return <>{vm.value?.toString()}</>;
    } else {
        return <>0</>;
    }
}); 
