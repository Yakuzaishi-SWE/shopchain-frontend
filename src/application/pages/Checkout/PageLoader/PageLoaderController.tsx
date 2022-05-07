import React from "react";
import { observer } from "mobx-react-lite";
import PageLoaderView from "./PageLoaderView";

export default observer(function PageLoaderController() {
        return <PageLoaderView />;
});