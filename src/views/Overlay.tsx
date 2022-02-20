import React from "react";
import { Loading } from "resources/svg";

const OverlayView = ({ show }: { show: boolean }) => {
    return <div className={"overlay" + (!show ? " hidden" : "")}>
        {
            show ?
                <>
                    <p>Check your Metamask extension. The payment process may take few seconds ...</p>
                    <Loading />
                </>
                :
                <></>
        }
    </div >;
};


export default OverlayView;