import React from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

const PageLoaderView = () => {
    return <div className="sweet-loading">
        <HashLoader css={override} size={100} color={"#fff"} loading={true} speedMultiplier={1.5} />
    </div>;
};

export default PageLoaderView;