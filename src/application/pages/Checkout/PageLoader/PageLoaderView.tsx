import { observer } from "mobx-react-lite";
import React from "react";
import { Loading } from "resources/svg";


export default observer(function PageLoaderView () {
    return <div className="sweet-loading">
        <Loading />
    </div>;
});