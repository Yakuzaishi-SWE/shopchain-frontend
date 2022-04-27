import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { FTMIcon } from "resources/svg";
import { v4 } from "uuid";
import { FTMtoWei } from "utils";
import Decimal from "decimal.js";
import InputView from "./Input/InputView";
import FormView from "./ECommerce/ECommerceView";
import FormController from "./ECommerce/ECommerceController";

const CheckoutView = () => {
    
    return <div>
        <h1>Pagina Checkout</h1>
        <Outlet/>
    </div>;

};

export default CheckoutView;