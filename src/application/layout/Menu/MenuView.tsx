import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { PaidFillIcon, ShoppingCartIcon, WalletIcon } from "resources/svg";

export default observer(function MenuView() {
    return <nav id="side-menu">
        <ul>
            <li>
                <NavLink to="/checkout" className="home-button">
                    <ShoppingCartIcon />
                    Checkout Page
                </NavLink>
            </li>
            <li>
                <NavLink to="/transaction/out/" className="home-button">
                    <PaidFillIcon />
                    Your Transactions
                </NavLink>
            </li>
            <li>
                <NavLink to="/transaction/in/" className="home-button">
                    <WalletIcon />
                    Inbound Transactions
                </NavLink>
            </li>
        </ul>
    </nav>;
});