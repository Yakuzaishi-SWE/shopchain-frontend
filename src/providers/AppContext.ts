import {createContext} from "react";

export interface IAppContext {
    info: {
        connected: boolean,
        address: string | null,
        chain: string | null,
    },
    provider: MetaMaskInpageProvider | null,
    connect: () => void,
}

const initContext: IAppContext = {
    info: {
        connected: false,
        address: null,
        chain: null,
    },
    provider: null,
    connect: () => {}
}

export const AppContext = createContext<IAppContext>(initContext);