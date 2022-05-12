import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import AddressView from "./Address/AddressView";
import ConnectMetamaskController from "./ConnectMetamask/ConnectMetamaskController";
import INavViewModel from "./INavViewModel";
import MetamaskError from "./MetamaskError";


export default observer(function NavView({ 
    address,
}: INavViewModel) {

    return <header key={address}>
        <NavLink to="/">Shopchain</NavLink>
        <MetamaskError/>
        {
            (!address)
                ?
                <ConnectMetamaskController />
                :
                <AddressView address={address}/>
        }
    </header>;
});