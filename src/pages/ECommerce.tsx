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
                    <label>Id</label>
                    <InputView value={id} setValue={setId} placeholder="0000-000000-000000000000000" />
                </div>
                <div className="form-wrapper">
                    <label>Amount</label>
                    <div className="ftm-input">
                        <input type="number" className="clickable-input" placeholder="0.00"/> 
                        <span className="ftm-icon">
                            <img src="../images/icons/FTM.png"/>
                            FTM
                        </span>
                    </div>
                </div>
                <div className="center">
                    <input type="submit" onClick={handleSubmit}></input>    
                </div>
        </form>;
}

export default ECommercePage;
