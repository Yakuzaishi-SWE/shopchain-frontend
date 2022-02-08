import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <Link to="/e-commerce/">Crea Nuova Transazione</Link>
        <Link to="/moneybox/">Moneybox</Link>
    </>
}

export default Home;