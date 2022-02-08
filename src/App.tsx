import NavController from "controllers/Nav";
import { EcommercePage, Transactionpage } from "pages";
import Home from "pages/home";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

export default () => {
    return <BrowserRouter>
        <NavController />
        <Switch>
            <Route exact path="/" ><Home /></Route>
            <Route exact path="/e-commerce/"><EcommercePage /></Route>
            <Route exact path="/transaction/:id/" ><Transactionpage /></Route>
        </Switch>
    </BrowserRouter>
}