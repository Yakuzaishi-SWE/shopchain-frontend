import React, { useContext } from "react";

export interface IAppContext {
    address: string | undefined,
    setAddress: (addr: string) => void,
    connected: boolean,
}

const initContext: IAppContext = {
    address: undefined,
    setAddress: (_addr: string) => { },
    connected: false,
}

export const AppContext = React.createContext<IAppContext>(initContext);


const useAddress = (): [ string | undefined, (addr: string) => void] => {
    const { address, setAddress } = useContext(AppContext);
    return [address, setAddress];
}

export default useAddress;
