import React from "react";
import { Link, useParams } from "react-router-dom";

const SplashTransaction = () => {
    const { dest, amount } = useParams<{ dest:string, amount: string }>();

    return <>
        <h1>Stai pagando {amount} a {dest}</h1>
        <section>
            <h2>Choose Payment Method</h2>
            <div className="p-methods">
                <button className="p-method">
                    Single
                </button>
                <button className="p-method" disabled>
                    Money Box
                </button>
            </div>
        </section>
    </>
}

export default SplashTransaction;