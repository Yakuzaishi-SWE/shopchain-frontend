import { useViewModel } from "application/utils/useViewModel";
import { providerStore } from "core/provider/store/ProviderStore";
import { observer } from "mobx-react-lite";
import React from "react";
import LockOverlayView from "./LockOverlayView";
import LockOverlayViewModel from "./LockOverlayViewModel";


export default observer(function LockOverlay() {
    const vm = useViewModel(LockOverlayViewModel, providerStore);

    return <LockOverlayView
        isConnected={vm.isConnected}
    />;
});