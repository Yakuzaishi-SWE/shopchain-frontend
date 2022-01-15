import { AppContext, IAppContext } from "hooks/useAddress"
import React, { useMemo, useState } from "react"


const AppProvider = ({ children }: { children: React.ReactChild }) => {
    const [address, setAddress] = useState<string | undefined>(undefined);
    const [chain, setChain] = useState<string | undefined>(undefined);
    const [connected, setConnected] = useState<boolean>(false);

    console.log((window as any).ethereum);

    const ctx = useMemo<IAppContext>(() => ({address, setAddress, connected}), [address, setAddress, connected]);

    return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>
} 

export default AppProvider;