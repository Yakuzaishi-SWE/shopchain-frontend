import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";


export default observer(function MoneyBoxCreationSuccess(){
    return <>
        <h1>MoneyBox Created Successfully</h1>
        <p className="redirect">
            <h2>Fill the MoneyBox and remember to release the money when you have received your package</h2>
            <Link to="/transaction/out/">See your transactions here</Link>
        </p>
    </>;});