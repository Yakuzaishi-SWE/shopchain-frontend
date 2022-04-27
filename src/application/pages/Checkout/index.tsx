import { observer } from "mobx-react-lite";
import React from "react";
import CheckoutView from "./CheckoutView";


export default observer(function Home() {
    return <CheckoutView/>;
})