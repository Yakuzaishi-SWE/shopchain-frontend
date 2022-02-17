import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <div className = "center">
            <Link to="/e-commerce/" className = "home-button">Simula Pagamento</Link>
            <Link to="/transaction/" className = "home-button">Elenco Transazioni</Link>
        </div>
    </>;
};

export default Home;