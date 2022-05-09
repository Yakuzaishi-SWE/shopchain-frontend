import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BackArrowIcon } from "resources/svg";

const CheckoutView = () => {
    
    return <>
        <div className="simple-link">
            <Link to="/"><BackArrowIcon className="svg-white"/>Go back to homepage</Link>
        </div>
        <div className="page-container">
            <h1 className="center">Checkout Page</h1>
            <Outlet/>
        </div>
    </>;
};

export default CheckoutView;