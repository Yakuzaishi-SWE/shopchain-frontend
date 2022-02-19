import React from "react";
import { Link } from "react-router-dom";


const TransactionPage = () => {
    return <>
        <h1>Transaction Completed Successfully</h1>
        <p>
            <Link to="/transaction/out/">See your transactions here</Link>
        </p>
    </>;

};

export default TransactionPage;