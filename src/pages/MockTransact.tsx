import React, { useState } from "react";

const MockTransact = () => {
    const [amount, setAmount] = useState<number>(0);
    const [destination, setDesination] = useState<string>("");

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();

        window.location.pathname = `/transaction/${destination}/${amount}`;

        return false;
    }

    return <form>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.valueAsNumber)}></input>
        <input type="text" value={destination} onChange={(e) => setDesination(e.target.value)}></input>

        <input type="submit" onClick={handleSubmit}></input>
    </form>;
}

export default MockTransact;