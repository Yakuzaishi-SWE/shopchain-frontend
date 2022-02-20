import { createContext } from "react";
import { MetamaskErrorName, MetamaskErrorSeverity } from "types/enums";
import { Contract } from "web3-eth-contract";

export interface IAppContext {
    info: {
        address: string | null,
        chain: string | null,
    },
    waiting: {
        state: boolean,
        start: () => void,
        stop: () => void,
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
    waiting: {
        state: false,
        start: () => {return;},
        stop: () => {return;},
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