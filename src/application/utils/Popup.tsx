import React from "react";
import { Loading } from "resources/svg";

function Popup({ show, children, close }: { show: boolean, children: React.ReactNode, close?: () => void }) {
    if (!show) return <></>;
    return <div className="popup">
        <div className="sweet-loading">
            <p>Check your Metamask extension. The payment process may take few seconds...</p>
            <Loading />
        </div>
    </div>;
}

export default Popup;