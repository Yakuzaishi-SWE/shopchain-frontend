import React, { useState } from "react";
import { BalanceController, OrderCountController } from "controllers";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <div className = "home-card">
            <div className="widget-box">
                <OrderCountController/>
                <BalanceController/>
            </div>

            <div className="button-box">

                <Link to="/e-commerce/" className = "home-button">Checkout Page</Link>
            
                <Link to="/transaction?from=buyer" className = "home-button">Your Orders</Link>
                <Link to="/transaction?from=seller" className = "home-button">Ingoing Transactions</Link>
            </div>
        </div>
    </>;
};

export default Home;