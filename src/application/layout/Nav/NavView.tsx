import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { MetamaskErrorName, MetamaskErrorSeverity } from "types/enums";
import AddressView from "./Address/AddressView";
import ConnectMetamaskController from "./ConnectMetamask/ConnectMetamaskController";
import INavViewModel from "./INavViewModel";
import MetamaskErrorView from "./MetamaskError/MetamaskErrorView";


export default observer(function NavView({ 
    address,
    severity,
    name,
    description 
}: INavViewModel) {

    return <header>
        <NavLink to="/">Shopchain</NavLink>
        <MetamaskErrorView severity={severity} name={name} description={description}/>
        {
            (!address)
                ?
                <ConnectMetamaskController />
                :
                <AddressView address={address}/>
        }
    </header>;
});