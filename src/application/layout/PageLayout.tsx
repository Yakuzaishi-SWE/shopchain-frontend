import React from "react";
import { Outlet } from "react-router-dom";
import MenuView from "./Menu/MenuView";
import Nav from "./Nav";



export default function PageLayout() {
    return <>
        <Nav />
        <MenuView />
        {/* <OverlayController /> */}
        <Outlet />
    </>;
}