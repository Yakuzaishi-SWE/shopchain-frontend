import useLoadingOverlay from "hooks/useLoadingOverlay";
import React from "react";
import { OverlayView } from "views";

const OverlayController = () => {
    const [waiting] = useLoadingOverlay();

    return <OverlayView show={waiting} />;
};


export default OverlayController;