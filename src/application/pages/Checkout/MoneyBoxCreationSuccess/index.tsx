import { observer } from "mobx-react-lite";
import React from "react";
import { Link, useLocation } from "react-router-dom";


export default observer(function MoneyBoxCreationSuccess(){
    const location = useLocation();
    return <>
        <h1>MoneyBox Created Successfully</h1>
        <p className="redirect">
            <h2>Fill the MoneyBox and remember to release the money when you have received your package</h2>
            <Link to={"/out/"+location.pathname.replace("/checkout/success/","")}>See your transaction here</Link>
        </p>
    </>;});