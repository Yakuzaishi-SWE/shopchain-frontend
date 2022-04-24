import PageLayout from "application/layout/PageLayout";
import Home from "application/pages/Home";
import { OverlayController } from "controllers";
import NavController from "controllers/Nav";
import { providerStore } from "core/provider/store/ProviderStore";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import { EcommercePage, HomePage, TransactionDetailsPage, TransactionInitPage, TransactionInPage, TransactionOutPage, TransactionSuccessPage } from "./pages";
import "./styles/main.scss";


export default () => {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="checkout" element={<div><h1>Pagina Checkout</h1><Outlet/></div>}>
                    <Route index element={<EcommercePage />} />
                    <Route path=":id" element={<TransactionInitPage />} />
                    <Route path="success" element={<TransactionSuccessPage />} />
                </Route>

                <Route path="transactions/out/" element={<TransactionOutPage />} />
                <Route path="transactions/in/" element={<TransactionInPage />} />

                <Route path="moneybox/:id" element={ } />
                <Route path="order/:id/" element={ } />
            </Route>
        </Routes>
    </HashRouter>;
};