import { observer } from "mobx-react-lite";
import React from "react";
import { Link, useLocation } from "react-router-dom";


export default observer(function TransactionSuccess(){
    const location = useLocation();
    
    return <>
        <h1>Transaction Completed Successfully</h1>
        <p className="redirect">
            <h2>Remember to release the money when you have received your package</h2>
            <Link to={"/out/"+location.pathname.replace("/checkout/success/","")}>See your transaction here</Link>
        </p>
    </>;});