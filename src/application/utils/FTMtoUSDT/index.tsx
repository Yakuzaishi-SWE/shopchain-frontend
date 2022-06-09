import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Loading } from "resources/svg";
import { useViewModel } from "../useViewModel";
import FTMtoUSDTViewModel from "./FTMtoUSDTViewModel";



export default observer(function FTMtoUSDT({ftm}: { ftm: number }) : any {
    const vm = useViewModel(FTMtoUSDTViewModel);

    useEffect(() => {
        vm.setFTM(ftm);
    }, [ftm]);

    if (vm.isLoaded) return vm.value?.toString();
    else return <Loading/>;
}); 