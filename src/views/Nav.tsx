import React from "react";

const Nav = ({address}:{address?: string}) => {
    return <header>
        <a href="/">Shopchain</a>
        <span>{address || ""}</span>
    </header>
}

export default Nav;