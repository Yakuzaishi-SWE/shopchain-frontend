import React from "react";

const ConnectMetamask = ({onClick}:{onClick: () => void}) => {
    return <button className="btn-connect" onClick={onClick}>
        Connect Metamask
    </button>;
};

export default ConnectMetamask;