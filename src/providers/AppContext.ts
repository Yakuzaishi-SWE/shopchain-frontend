import { createContext } from "react";
import { Contract } from "web3-eth-contract";

export interface IAppContext {
    info: {
        connected: boolean,
        address: string | null,
        chain: string | null,
    },
    provider: MetaMaskInpageProvider | null,
    contract: Contract | null,
    connect: () => void,
}

const initContext: IAppContext = {
    info: {
        connected: false,
        address: null,
        chain: null,
    },
    provider: null,
    contract: null,
    connect: () => { }
}

export const AppContext = createContext<IAppContext>(initContext);