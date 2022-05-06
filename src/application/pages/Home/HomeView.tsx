import React from "react";
import { Link } from "react-router-dom";
import OrderCountController from "./OrderCount/OrderCountController";
import BalanceController from "./Balance/BalanceController";
import { OrderIcon } from "resources/svg";
import MoneyBoxCountController from "./MoneyBoxCount/MoneyBoxCountController";
import MoneyBoxBalanceController from "./MoneyBoxBalance/MoneyBoxBalanceController";

const HomeView = () => {
    return <div className="page-container">
        <div className="home-menu">
            <Link to="/checkout" className="home-button">
                <OrderIcon />
                Checkout Page
            </Link>
            <Link to="/transaction/out/" className="home-button">
                <OrderIcon />
                Your Transactions
            </Link>
            <Link to="/transaction/in/" className="home-button">
                <OrderIcon />   
                Inbound Transactions
            </Link>
        </div>


        <div className="home-card">
            <h1>Hey FraBro, welcome in Shopchain Verse!</h1>
            <h2>Watch some of our statistics</h2>
            <p>Total Registered Orders in our contracts</p>
            <div className="widget-box">
                <OrderCountController />
                <MoneyBoxCountController />
            </div>

            <p>Total FTM</p>
            <div className="widget-box">
                <BalanceController />
                <MoneyBoxBalanceController />
            </div>
            
        </div>
    </div>;
};

export default HomeView;