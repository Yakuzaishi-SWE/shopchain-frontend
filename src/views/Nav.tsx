import { ConnectMetamaskController, AddressController } from "controllers";
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ address }: { address?: string }) => {
    return <header>
        <Link to="/">Shopchain</Link>
        {
            (!address)
                ?
                <ConnectMetamaskController />
                :
                <AddressController/>
        }
    </header>
}

export default Nav;