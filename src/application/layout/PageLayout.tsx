import React from "react";
import { Outlet } from "react-router-dom";
import LockOverlay from "./LockOverlay";
import MenuView from "./Menu/MenuView";
import Nav from "./Nav";



export default function PageLayout() {
    return <>
        <Nav />
        <MenuView />
        <Outlet />
        <LockOverlay />
    </>;
}