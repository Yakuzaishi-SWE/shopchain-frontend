import useProviderError from "hooks/useProviderError";
import React from "react";
import { MetamaskErrorView } from "views";

const MetamaskErrorController = () => {
    const { severity, name, description } = useProviderError();

    return <MetamaskErrorView severity={severity} name={name} description={description} />;
};

export default MetamaskErrorController;