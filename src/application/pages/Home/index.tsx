import { observer } from "mobx-react-lite";
import React from "react";
import HomeView from "./HomeView";


export default observer(function Home() {
    return <HomeView/>;
})