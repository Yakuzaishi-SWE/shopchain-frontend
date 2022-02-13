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
        <div className="form-wrapper">
            <label>
                Id:
            </label>
            <InputView value={id} setValue={setId} />
        </div>
        <div className="form-wrapper">
            <input type="submit" onClick={handleSubmit}></input>    
        </div>
    </form>;
}

export default ECommercePage;