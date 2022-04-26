import React from "react";
import { Link } from "react-router-dom";
import OrderCountController from "./OrderCount/OrderCountController";
import BalanceController from "./Balance/BalanceController";

const HomeView = () => {
    return <>
        <div className="home-card">
            <div className="button-box">
                <Link to="/transaction/init/" className="home-button">Checkout Page</Link>
            </div>
            <p>In shopchain until now</p>
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

export default HomeView;