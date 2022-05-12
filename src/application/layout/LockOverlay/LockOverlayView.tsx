import { observer } from "mobx-react-lite";
import React from "react";
import ILockOverlayViewModel from "./ILockOverlayModel";
import Popup from "application/utils/Popup";
import { useLocation } from "react-router-dom";


export default observer(function LockOverlayView({ 
    isConnected,
}: ILockOverlayViewModel) {
    const location = useLocation();

    return <>
        {location.pathname !== "/" && location.pathname !== "/checkout" 
            ?
            <Popup show={!isConnected}>
                <div className="lock-overlay">
                    <h1 id="ovrl">METAMASK NOT CONNECTED</h1>
                    <p id="redp">Please connect to Metamask to continue</p>
                </div>
            </Popup>
            : <></>
        }
    </>;
});