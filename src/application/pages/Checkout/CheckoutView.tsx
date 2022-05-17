import React from "react";
import { Outlet } from "react-router-dom";

const CheckoutView = () => {
    
    return <>
        <div className="page-container column">
            <h1>Checkout Page</h1>
            <Outlet/>
        </div>
    </>;
};

export default CheckoutView;