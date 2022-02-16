import React from "react";
import { TransDirectionSelectorView } from "views";

const TransDirectionSelectorController = ({ isSeller, setIsSeller }: { isSeller: boolean, setIsSeller: (b: boolean) => void }) => {
    return <TransDirectionSelectorView isSeller={isSeller} setIsSeller={setIsSeller} />;
};


export default TransDirectionSelectorController;