import React from "react";
import { Loading } from "resources/svg";

const WaitingCall = ({ children, loaded, error }: { children?: React.ReactChild, loaded?: boolean, error?: string }) => {
    if (loaded !== undefined && !loaded) return <Loading />;
    if (error) return <p>{error.toString()}</p>;
    return <>
        {children}
    </>;
};

export const WaitingSend = ({ children, loaded, error }: { children?: React.ReactChild, loaded?: boolean, error?: string }) => {
    if (loaded !== undefined && !loaded) return <>
        <p>Check your Metamask extension. The payment process may take few seconds ...</p>
        <Loading />
    </>;
    if (error) return <p>{error.toString()}</p>;
    return <>
        {children}
    </>;
};

export default WaitingCall;