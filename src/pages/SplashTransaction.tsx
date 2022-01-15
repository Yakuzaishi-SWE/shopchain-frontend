import React from "react";
import { Link, useParams } from "react-router-dom";

const SplashTransaction = () => {
    const { dest, amount } = useParams<{ dest:string, amount: string }>();

    return <>
        <h1>Stai pagando {amount} a {dest}</h1>
        <Link to="/single/">SIngle</Link>
        <Link to="/moneybox/">Moneybox</Link>
    </>
}

export default SplashTransaction;