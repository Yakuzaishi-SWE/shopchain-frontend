import React from "react";
import { Loading } from "resources/svg";

const OverlayView = ({ show }: { show: boolean }) => {
    return <div className={"overlay" + (!show ? " hidden" : "")}>
        {
            show ?
                <>
                    <div className="sweet-loading">
                        <p>Check your Metamask extension. The payment process may take few seconds ...</p>
                        <Loading />
                    </div>
                </>
                :
                <></>
        }
    </div >;
};


export default OverlayView;