import PageLayout from "application/layout/PageLayout";
import CheckoutView from "application/pages/Checkout/CheckoutView";
import ECommerceController from "application/pages/Checkout/ECommerce/ECommerceController";
import TransactionInitController from "application/pages/Checkout/TransactionInit/TransactionInitController";
import TransactionSuccess from "application/pages/Checkout/TransactionSuccess";
import Home from "application/pages/Home";
import TransactionDetails from "application/pages/TransactionDetails";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { TransactionInPage, TransactionOutPage } from "./pages";
import "./styles/main.scss";


export default () => {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="checkout" element={<CheckoutView/>}>
                    <Route index element={<ECommerceController />} />
                    <Route path=":id" element={<TransactionInitController />} />
                    <Route path="success" element={<TransactionSuccess />} />
                </Route>

                <Route path="transactions/out/" element={<TransactionOutPage />} />
                <Route path="transactions/in/" element={<TransactionInPage />} />

                <Route path="moneybox/:id" element={ } />
                <Route path="order/:id/" element={<TransactionDetails/>} />
            </Route>
        </Routes>
    </HashRouter>;
};