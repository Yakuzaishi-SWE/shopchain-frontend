import { ConnectMetamaskController, AddressController } from "controllers";
import MetamaskErrorController from "controllers/MetamaskErrors";
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ address }: { address?: string }) => {
    return <header>
        <Link to="/">Shopchain</Link>
        <MetamaskErrorController/>
        {
            (!address)
                ?
                <ConnectMetamaskController />
                :
                <AddressController/>
        }
    </header>;
};

export default Nav;