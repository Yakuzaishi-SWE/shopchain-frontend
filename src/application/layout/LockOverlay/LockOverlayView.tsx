import { observer } from "mobx-react-lite";
import React from "react";
import ILockOverlayViewModel from "./ILockOverlayModel";
import Popup from "application/utils/Popup";


export default observer(function LockOverlayView({ 
    isConnected,
}: ILockOverlayViewModel) {

    return <Popup show={!isConnected}>
        <div className="lock-overlay">
            <h1 id="ovrl">METAMASK NOT CONNECTED</h1>
            <p id="redp">Please connect to Metamask to continue</p>
        </div>
    </Popup>;
});