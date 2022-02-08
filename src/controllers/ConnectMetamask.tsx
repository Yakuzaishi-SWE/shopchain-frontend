import { ConnectMetamaskView } from "views"
import React from "react";
import useMetamask from "hooks/useMetamask";

const ConnectMetamaskController = () => {
    const [, connect] = useMetamask();

    return <ConnectMetamaskView onClick={connect} />
}

export default ConnectMetamaskController;