import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { PaidFillIcon, ShoppingCartIcon, WalletIcon } from "resources/svg";

export default observer(function MenuView() {
    return <nav id="home-menu">
        <ul>
            <li>
                <Link to="/checkout" className="home-button">
                    <ShoppingCartIcon />
                    Checkout Page
                </Link>
            </li>
            <li>
                <Link to="/transaction/out/" className="home-button">
                    <PaidFillIcon />
                    Your Transactions
                </Link>
            </li>
            <li>
                <Link to="/transaction/in/" className="home-button">
                    <WalletIcon />
                    Inbound Transactions
                </Link>
            </li>
        </ul>
    </nav>
});