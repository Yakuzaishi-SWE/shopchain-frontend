import { createContext } from "react";
import { MetamaskErrorName, MetamaskErrorSeverity } from "types/enums";
import { Contract } from "web3-eth-contract";

export interface IAppContext {
    info: {
        address: string | null,
        chain: string | null,
    },
    provider_error: MetamaskError,
    contract: Contract | null,
    connect: () => void,
}

const initContext: IAppContext = {
    info: {
        address: null,
        chain: null,
    },
    provider_error: {
        severity: MetamaskErrorSeverity.OK,
        name: MetamaskErrorName.OK,
        description: "Everything is nominal"
    },
    contract: null,
    connect: () => {return;}
};

export const AppContext = createContext<IAppContext>(initContext);