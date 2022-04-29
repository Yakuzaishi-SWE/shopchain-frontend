import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";


export default observer(function TransactionSuccess(){
    return <>
        <h1>Transaction Completed Successfully</h1>
        <p className="redirect">
            <h2>Remember to release the money when you have received your package</h2>
            <Link to="/transaction/out/">See  here</Link>
        </p>
    </>;
});