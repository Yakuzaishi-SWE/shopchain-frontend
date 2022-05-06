import React from "react";
import { Link } from "react-router-dom";
import OrderCountController from "./OrderCount/OrderCountController";
import OrderBalanceController from "./OrderBalance/OrderBalanceController";
import MoneyBoxBalanceController from "./MoneyBoxBalance/MoneyBoxBalanceController";
import { PaidFillIcon, ShoppingCartIcon, WalletIcon } from "resources/svg";
import MoneyBoxCountController from "./MoneyBoxCount/MoneyBoxCountController";

const HomeView = () => {
    return <div className="page-container">
        <div className="home-menu">
            <Link to="/checkout" className="home-button">
                <ShoppingCartIcon />
                Checkout Page
            </Link>
            <Link to="/transaction/out/" className="home-button">
                <PaidFillIcon />
                Your Transactions
            </Link>
            <Link to="/transaction/in/" className="home-button">
                <WalletIcon />   
                Inbound Transactions
            </Link>
        </div>
        <div className="home-card">
            <h1>Hey FraBro, welcome in Shopchain Verse!</h1>

            <h2>What is Shopchain?</h2>
            <p>Shopchain is a Decentralized App deployed on Fantom (test) Network. It manages orders for future crypto e-commerce.</p>

            <h2>Our Services</h2>
            <div className="widget-box">
                <div className="widget service">
                    <h3>
                        <span className="count">less than $0.001</span>
                    </h3>
                    <p>Avg. cost per transaction</p> 
                </div>
                <div className="widget service">
                    <h3>
                        <span className="count">Pay with friends</span>
                    </h3>
                    <p>Create a moneybox and split an order payment</p> 
                </div>
                <div className="widget service">
                    <h3>
                        <span className="count">Refund Garanteed</span>
                    </h3>
                    <p>You don't receive your order? Ask for a refund.</p> 
                </div>
            </div>

            <h2>Watch some of our statistics</h2>
            {/*<h3>Total Registered Orders in our contracts</h3>*/}
            <div className="widget-box">
                <OrderCountController />
                <MoneyBoxCountController />
            </div>

            {/*<h3>Total FTM</h3>*/}
            <div className="widget-box">
                <OrderBalanceController />
                <MoneyBoxBalanceController />
            </div>
            
        </div>
    </div>;
};

export default HomeView;