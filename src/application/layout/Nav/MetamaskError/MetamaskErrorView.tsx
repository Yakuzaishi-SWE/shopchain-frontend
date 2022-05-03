import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { CheckMark, Cross, Warning } from "resources/svg";
import { MetamaskErrorSeverity } from "types/enums";
import IMetamaskErrorViewModel from "./IMetamaskError";


export default observer(function MetamaskErroView({ severity, name, description }: IMetamaskErrorViewModel) {
    const classSeverity = severity === MetamaskErrorSeverity.BLOCKING ? " error" : (severity === MetamaskErrorSeverity.UNBLOCKING ? " warning" : " success");
    const iconSeverity = severity === MetamaskErrorSeverity.BLOCKING ? <Cross/> : (severity === MetamaskErrorSeverity.UNBLOCKING ? <Warning/> : <CheckMark/>);
    const [hidden, setHidden] = useState<boolean>(false);

    const toggle = () => setHidden(!hidden);

    return <span className={"provider-error" + classSeverity} onClick={toggle}>
        {iconSeverity}
        <div className={"error-overlay"} onClick={toggle}>
            <span>{name}</span>
            <p>{description}</p>
        </div>
    </span>;
});