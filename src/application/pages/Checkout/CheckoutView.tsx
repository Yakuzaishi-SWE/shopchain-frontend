import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BackArrowIcon } from "resources/svg";

const CheckoutView = () => {
    
    return <>
        <div className="page-container column">
            <h1>Checkout Page</h1>
            <Outlet/>
        </div>
    </>;
};

export default CheckoutView;