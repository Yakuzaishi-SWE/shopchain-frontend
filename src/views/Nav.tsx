import ConnectMetamaskController from "controllers/ConnectMetamask";
import React from "react";

const Nav = ({ address }: { address?: string }) => {
    return <header>
        <a href="/">Shopchain</a>
        {
            (!address)
                ?
                <ConnectMetamaskController />
                :
                <span>{address || ""}</span>

        }
    </header>
}

export default Nav;