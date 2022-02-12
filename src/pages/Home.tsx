import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <Link to="/e-commerce/">Simula Pagamento</Link>
        <Link to="/transaction/">Elenco Transazioni</Link>
    </>
}

export default Home;