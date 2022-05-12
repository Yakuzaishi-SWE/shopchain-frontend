import React from "react";

function Popup({ show, children, close }: { show: boolean, children: React.ReactNode, close?: () => void }) {
    if (!show) return <></>;

    if(close) return <div className="popup">
        <div className="popup-inner">
            <button onClick={close} className="close-btn">X</button>
            {children}
        </div>
    </div>;

    return <div className="popup">          
        {children}
    </div>;
}

export default Popup;