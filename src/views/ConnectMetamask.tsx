import React from "react";

const ConnectMetamask = ({onClick}:{onClick: () => void}) => {
    return <button className="btn-connect" onClick={onClick}>
        Abilita Ethereum
    </button>
}

export default ConnectMetamask;