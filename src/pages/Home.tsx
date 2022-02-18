import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <div className = "center">
            <Link to="/e-commerce/" className = "home-button">Checkout Page</Link>
            
            <Link to="/transaction?from=buyer" className = "home-button">Your Orders</Link>
            <Link to="/transaction?from=seller" className = "home-button">Ingoing Transactions</Link>
        </div>
    </>;
};

export default Home;