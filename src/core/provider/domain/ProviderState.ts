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

    public state: MetamaskError = Nominal;

    constructor(store: ProviderStore) {
        this.store = store;
        this.setState();
        makeAutoObservable(this, {}, { autoBind: true});
    }

    get getState() {
        return this.state;
    }

    setState(){
        /*
        if(newState !== this.state && !!this.state)
            this.state = newState;
        */
        //if (!ethereum) return MissingMetamask;
        if (!this.store.w3) this.state = W3_Error;
        else if (!this.store.address) this.state = ContractError;
        //else if (!currentAccount) return NotConnected;
        else if (!this.store.chain || this.store.chain.chainId !== "0xfa2") this.state = WrongChain;
        else this.state = Nominal;
    }



}