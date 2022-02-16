import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <div className = "center">
            <Link to="/e-commerce/">Simula Pagamento</Link>
            <Link to="/transaction/">Elenco Transazioni</Link>
        </div>
    </>;
};

export default Home;