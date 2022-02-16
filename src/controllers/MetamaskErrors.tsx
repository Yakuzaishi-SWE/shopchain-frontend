import useProviderError from "hooks/useProviderError";
import React, { useState } from "react";
import { MetamaskErrorSeverity } from "types/enums";



const MetamaskErrorView = ({ severity, name, description }: { severity: MetamaskErrorSeverity, name: MetamaskErrorName, description: string }) => {
    const classSeverity = severity === MetamaskErrorSeverity.BLOCKING ? " error" : (severity === MetamaskErrorSeverity.UNBLOCKING ? " warning" : " success");
    const iconSeverity = severity === MetamaskErrorSeverity.BLOCKING ? "✗" : (severity === MetamaskErrorSeverity.UNBLOCKING ? "⚠" : "✓");
    const [hidden, setHidden] = useState<boolean>(false);

    const toggle = () => setHidden(!hidden);

    return <span className={"provider-error" + classSeverity} onClick={toggle}>
        {iconSeverity}
        <div className={"error-overlay"} onClick={toggle}>
            <span>{name}</span>
            <p>{description}</p>
        </div>
    </span>;
};


const MetamaskErrorController = () => {
    const { severity, name, description } = useProviderError();

    return <MetamaskErrorView severity={severity} name={name} description={description} />;
};

export default MetamaskErrorController;