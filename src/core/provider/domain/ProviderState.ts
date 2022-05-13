import { makeAutoObservable } from "mobx";
import { MetamaskErrorName, MetamaskErrorSeverity } from "types/enums";
import ProviderStore from "../store/ProviderStore";


const MissingMetamask: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.METAMASK_NOT_INSTALLED,
    description: "Please install MetaMask",
};

const NotConnected: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.NOT_CONNECTED,
    description: "Connect MetaMask",
};

const Nominal: MetamaskError = {
    severity: MetamaskErrorSeverity.OK,
    name: MetamaskErrorName.OK,
    description: "Everything is nominal"
};

const WrongChain: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.WRONG_CHAIN,
    description: "Connect to Fantom Test Net (0xfa2)"
};

const W3_Error: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.W3_ERROR,
    description: "Error in the web3 library",
};

const ContractError: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.CONTRACT_NOT_LOADED,
    description: "Contract is not loaded",
};

export default class ProviderState {
    private readonly store: ProviderStore;


    constructor(store: ProviderStore) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    private get value(): MetamaskError {
        const checks = [
            !this.store.provider,
            !this.store.w3,
            !this.store.w3.mm,
            !this.store.w3.om,
            !this.store.address.address,
            !this.store.chain.isFantomTestnet,
        ];

        if (checks[0]) return MissingMetamask;
        if (checks[1]) return W3_Error;
        if (checks[2]) return ContractError;
        if (checks[3]) return ContractError;
        if (checks[4]) return NotConnected;
        if (checks[5]) return WrongChain;
        return Nominal;
    }

    get isOK() {
        return this.severity === MetamaskErrorSeverity.OK;
    }

    /* get isBlocking() {
        return this.value.severity === MetamaskErrorSeverity.BLOCKING;
    } */

    get severity() {
        return this.value.severity;
    }

    get description() {
        return this.value.description;
    }

    get name() {
        return this.value.name;
    }
}