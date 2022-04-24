import { ConnectMetamaskController, AddressController } from "controllers";
import MetamaskErrorController from "controllers/MetamaskErrors";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import INavViewModel from "./INavViewModel";


export default observer(function NavView({ address }: INavViewModel) {
    return <header>
        <NavLink to="/">Shopchain</NavLink>
        <MetamaskErrorController/>
        {
            (!address)
                ?
                <ConnectMetamaskController />
                :
                <AddressController/>
        }
    </header>;
});