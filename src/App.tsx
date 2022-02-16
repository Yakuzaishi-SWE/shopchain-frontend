import NavController from "controllers/Nav";
import { EcommercePage, HomePage, TransactionListPage, TransactionPage } from "./pages";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

export default () => {
    return <BrowserRouter>
        <NavController />
        <Switch>
            <Route path="/e-commerce/"><EcommercePage /></Route>
            <Route path="/transaction/:id/" ><TransactionPage /></Route>
            <Route path="/transaction/"><TransactionListPage /></Route>
            <Route path="/" ><HomePage /></Route>
        </Switch>
    </BrowserRouter>;
};