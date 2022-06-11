import { observer } from "mobx-react-lite";
import React from "react";
import ILockOverlayViewModel from "./ILockOverlayViewModel";
import Popup from "application/utils/Popup";
import { useLocation } from "react-router-dom";
import ProviderStore from "core/provider/store/ProviderStore";
import {LockLayer} from "../../../resources/svg"


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
                    <LockLayer className="LockStyle"/>
                    <p className="center">
                        {providerStore.state.description === "Connect MetaMask" 
                            ?
                            <p id="layerP">Please connect MetaMask</p>
                            :
                            providerStore.state.description}
                    </p> 
                </div>
            </Popup>
            : <></>
        }
    </>;
});