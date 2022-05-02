import PageLayout from "application/layout/PageLayout";
import CheckoutView from "application/pages/Checkout/CheckoutView";
import ECommerceController from "application/pages/Checkout/ECommerce/ECommerceController";
import Choice from "application/pages/Checkout/TransactionInit/Choice";
import PickAmount from "application/pages/Checkout/TransactionInit/PickAmount";
import TransactionInitController from "application/pages/Checkout/TransactionInit/TransactionInitController";
import TransactionSuccess from "application/pages/Checkout/TransactionSuccess";
import Home from "application/pages/Home";
import MoneyBoxDetails from "application/pages/MoneyBoxDetails";
import OrderDetails from "application/pages/OrderDetails";
import { providerStore } from "core/provider/store/ProviderStore";
import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";


export default () => {

    useEffect(() =>{
        providerStore.getProvider();
    }, []);

    useEffect(() => {
        if (providerStore.provider) {
            providerStore.getAccounts();
            providerStore.getChainId();
        }
    }, [providerStore.provider, providerStore.getAccounts, providerStore.getChainId]);

    return <HashRouter>
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="checkout" element={<CheckoutView/>}>
                    <Route index element={<ECommerceController />} />
                    <Route path=":id" element={<TransactionInitController />} >
                        <Route index element={<Choice/>} />
                        <Route path="moneybox" element={<PickAmount/>} />
                    </Route>
                    <Route path="success" element={<TransactionSuccess />} />
                </Route>

                {/* <Route path="transactions/out/" element={<TransactionOutPage />} />
                <Route path="transactions/in/" element={<TransactionInPage />} /> */}

                <Route path="moneybox/:id" element={<MoneyBoxDetails/>} />
                <Route path="order/:id/" element={<OrderDetails/>} />
            </Route>
        </Routes>
    </HashRouter>;
};