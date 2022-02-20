import NavController from "controllers/Nav";
import { EcommercePage, HomePage, TransactionInPage, TransactionOutPage, TransactionPage, TransactionSuccess } from "./pages";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.scss";
import { OverlayController } from "controllers";

export default () => {
    return <BrowserRouter>
        <NavController />
        <OverlayController/>
        <Switch>
            <Route path="/e-commerce/"><EcommercePage /></Route>
            <Route path="/transaction-success/" ><TransactionSuccess /></Route>
            <Route path="/transaction/t/:id/" ><TransactionPage /></Route>
            <Route path="/transaction/in/"><TransactionInPage /></Route>
            <Route path="/transaction/out/"><TransactionOutPage /></Route>
            <Route path="/" ><HomePage /></Route>
        </Switch>
    </BrowserRouter>;
};