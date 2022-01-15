import NavController from "controllers/Nav";
import { HomePage, MockTransactPage, MoneyBoxPaymentPage, SinglePaymentPage, SplashTransactionPage } from "pages";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

export default () => {
    return <BrowserRouter>
        <NavController />
        <Switch>
            <Route exact path="/" ><MockTransactPage /></Route>
            <Route exact path="/transaction/:dest/:amount/" ><SplashTransactionPage /></Route>
            <Route exact path="/transaction/:id/single/" ><SinglePaymentPage /></Route>
            <Route exact path="/transaction/:id/moneybox/" ><MoneyBoxPaymentPage /></Route>
        </Switch>
    </BrowserRouter>
}