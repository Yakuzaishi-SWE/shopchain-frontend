import React from "react";
import { PageLoaderView } from "views";

const PageLoaderController = ({ loading }: { loading: boolean }) => {
    return <PageLoaderView loading={loading} />
}

export default PageLoaderController;