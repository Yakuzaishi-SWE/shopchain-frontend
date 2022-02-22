import React from "react";
import { Loading } from "resources/svg";

const WaitingCall = ({ children, loaded, error }: { children?: React.ReactChild, loaded?: boolean, error?: string }) => {
    if (!loaded) return <div className="sweet-loading">
        <Loading />
    </div>;
    if (error) return <p>{error.toString()}</p>;
    return <>
        {children}
    </>;
};

export default WaitingCall;