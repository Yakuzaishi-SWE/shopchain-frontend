import { BalanceController, OrderCountController } from "controllers";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <div className="home-card">
            <div className="button-box">
                <Link to="/transaction/init/" className="home-button">Checkout Page</Link>
            </div>
            <div className="widget-box">
                <OrderCountController />
                <BalanceController />
            </div>
            <div className="button-box">
                <Link to="/transaction/out/" className="home-button">Your Transactions</Link>
                <Link to="/transaction/in/" className="home-button">Inbound Transactions</Link>
            </div>
        </div>
    </>;
};

export default Home;