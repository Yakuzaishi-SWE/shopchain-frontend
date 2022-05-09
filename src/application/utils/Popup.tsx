import React from "react";

function Popup({ show, children, close }: { show: boolean, children: React.ReactNode, close?: () => void }) {
    if (!show) return <></>;
    return <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={close}>close</button>
            {children}
        </div>
    </div>;
}

export default Popup;