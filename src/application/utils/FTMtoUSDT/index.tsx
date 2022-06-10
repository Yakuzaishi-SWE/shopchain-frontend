import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Loading } from "resources/svg";
import { useViewModel } from "../useViewModel";
import FTMtoUSDTViewModel from "./FTMtoUSDTViewModel";



export default observer(function FTMtoUSDT({ftm}: { ftm: number }) {
    const vm = useViewModel(FTMtoUSDTViewModel);

    useEffect(() => {
        vm.setFTM(ftm);
    }, [vm.setFTM, ftm]);

    if (vm.isLoaded) return <>{vm.value?.toString()}</>;
    else return <Loading/>;
}); 