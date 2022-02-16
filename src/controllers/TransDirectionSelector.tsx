import React from "react";

const TransDirectionSelectorView = ({ isSeller, setIsSeller }: { isSeller: boolean, setIsSeller: (b: boolean) => void }) => {
    return <form>
        <fieldset>
            <legend>Direction</legend>
            <label>
                Outgoing
                <input type="radio" name="direction" value="outbound" checked={!isSeller} onChange={() => setIsSeller(false)} />
            </label>
            <label>
                Ingoing
                <input type="radio" name="direction" value="inbound" checked={isSeller} onChange={() => setIsSeller(true)} />
            </label>
        </fieldset>
    </form>;
};


const TransDirectionSelectorController = ({ isSeller, setIsSeller }: { isSeller: boolean, setIsSeller: (b: boolean) => void }) => {
    return <TransDirectionSelectorView isSeller={isSeller} setIsSeller={setIsSeller} />;
};


export default TransDirectionSelectorController;