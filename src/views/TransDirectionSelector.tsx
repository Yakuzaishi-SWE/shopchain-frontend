import React from "react";

const TransDirectionSelectorView = ({ isSeller, setIsSeller }: { isSeller: boolean, setIsSeller: (b: boolean) => void }) => {
    return <form className="toggle-form">
        <fieldset>
            <legend>Direction</legend>
            <label>
                Outgoing
                <input type="checkbox" name="direction" value="outbound" checked={isSeller} onChange={(el) => setIsSeller(el.target.checked)} />
                Ingoing
            </label>
        </fieldset>
    </form>;
};

export default TransDirectionSelectorView;