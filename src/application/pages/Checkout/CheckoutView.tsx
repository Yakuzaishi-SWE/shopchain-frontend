import React from "react";
import { Outlet } from "react-router-dom";

const CheckoutView = () => {
    
    return <div>
        <h1 className="center">Checkout Page</h1>
        <Outlet/>
    </div>;

};

export default CheckoutView;