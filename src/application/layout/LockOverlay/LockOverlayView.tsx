import { observer } from "mobx-react-lite";
import React from "react";
import ILockOverlayViewModel from "./ILockOverlayModel";
import Popup from "application/utils/Popup";
import { useLocation } from "react-router-dom";
import ProviderStore from "core/provider/store/ProviderStore";


export default observer(function LockOverlayView({ 
    isConnected,
}: ILockOverlayViewModel) {
    const location = useLocation();
    const providerStore = ProviderStore.getInstance();

    return <>
        {location.pathname !== "/" && location.pathname !== "/checkout" 
            ?
            <Popup show={!isConnected}>
                <div className="lock-overlay">
                    <h1 id="ovrl">METAMASK NOT CONNECTED</h1>
                    <p id="redp">
                        {providerStore.state.description === "Connect Metamask" 
                            ?
                            <p id="redp">Please connect to Metamask</p>
                            :
                            providerStore.state.description}
                    </p> 
                </div>
            </Popup>
            : <></>
        }
    </>;
});