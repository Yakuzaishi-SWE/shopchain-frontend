import { OverlayController } from "controllers";
import NavController from "controllers/Nav";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { EcommercePage, HomePage, TransactionDetailsPage, TransactionInitPage, TransactionInPage, TransactionOutPage, TransactionSuccessPage } from "./pages";
import "./styles/main.scss";


export default () => {
    return <HashRouter>
        <NavController />
        <OverlayController />
        <Switch>
            <Route path="/transaction/init/:id/"><TransactionInitPage /></Route>
            <Route path="/transaction/init/"><EcommercePage /></Route>
            <Route path="/transaction/out/:id/success/" ><TransactionSuccessPage /></Route>
            <Route path="/transaction/out/:id/" ><TransactionDetailsPage /></Route>
            <Route path="/transaction/out/"><TransactionOutPage /></Route>
            <Route path="/transaction/in/"><TransactionInPage /></Route>
            <Route path="/" ><HomePage /></Route>
        </Switch>
    </HashRouter>;
};