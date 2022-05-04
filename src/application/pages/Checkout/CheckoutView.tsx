import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { FTMIcon } from "resources/svg";
import { v4 } from "uuid";
import { FTMtoWei } from "utils";
import Decimal from "decimal.js";

const CheckoutView = () => {
    
    return <div>
        <h1 className="center">Checkout Page</h1>
        <Outlet/>
    </div>;

};

export default CheckoutView;