import React, { useState } from "react";
import { InputView } from "views";

const ECommercePage = () => {
    const [amount, setAmount] = useState<number>(0);
    const [id, setId] = useState<string>("");

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();

        window.location.pathname = `/transaction/${id}/`;

        return false;
    }

    return <form>
        <label>
            Id:
            <InputView value={id} setValue={setId} />
        </label>
        
        <input type="submit" onClick={handleSubmit}></input>
    </form>;
}

export default ECommercePage;