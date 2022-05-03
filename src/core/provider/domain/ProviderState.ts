import { makeAutoObservable } from "mobx";
import { type } from "os";
import { MetamaskErrorName, MetamaskErrorSeverity } from "types/enums";
import ProviderStore from "../store/ProviderStore";


const MissingMetamask: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.METAMASK_NOT_INSTALLED,
    description: "please install metamask",
};

const NotConnected: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.NOT_CONNECTED,
    description: "Connect Metamask",
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
        if (!this.store.provider) return MissingMetamask;
        if (!this.store.w3) return W3_Error;
        if (!this.store.w3.mm) return ContractError;
        if (!this.store.w3.om) return ContractError;
        if (!this.store.address) return NotConnected;
        if (!this.store.chain.isFantomTestnet) return WrongChain;
        else return Nominal;
    }

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