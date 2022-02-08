import useAddress from "hooks/useAddress"
import React from "react"
import { NavView } from "views"



const NavController =  () => {
    const address = useAddress();

    return <NavView address={address || undefined}/>
}

export default NavController;