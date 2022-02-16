import { ConnectMetamaskView } from "views";
import React from "react";
import {useConnect} from "hooks";

const ConnectMetamaskController = () => {
    const connect = useConnect();

    return <ConnectMetamaskView onClick={connect} />;
};

export default ConnectMetamaskController;