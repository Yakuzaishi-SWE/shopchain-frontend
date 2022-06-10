import React from "react";
import OrderCountController from "./OrderCount/OrderCountController";
import OrderBalanceController from "./OrderBalance/OrderBalanceController";
import MoneyBoxBalanceController from "./MoneyBoxBalance/MoneyBoxBalanceController";
import MoneyBoxCountController from "./MoneyBoxCount/MoneyBoxCountController";

const HomeView = () => {
    return <div className="page-container">
        <div className="home-card">
            <h1>Hey, welcome in Shopchain Verse!</h1>

            <h2>What is Shopchain?</h2>
            <p>Shopchain is a Decentralized App deployed on Fantom (test) Network. It manages orders for future crypto e-commerce.</p>

            <h2>Our Services</h2>
            <div className="widget-box">
                <div className="widget service">
                    <h3>
                        <span className="ourServices">Less than $0.001</span>
                    </h3>
                    <p>Avg. cost per transaction</p> 
                </div>
                <div className="widget service">
                    <h3>
                        <span className="ourServices">Pay with friends</span>
                    </h3>
                    <p>Create a MoneyBox and split an order payment</p> 
                </div>
                <div className="widget service">
                    <h3>
                        <span className="ourServices">Refund Garanteed</span>
                    </h3>
                    <p>You didn't receive your order? Ask for a refund</p> 
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