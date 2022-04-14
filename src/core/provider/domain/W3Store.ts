import { action, autorun, makeObservable, observable } from "mobx";
import Web3 from "web3";
import { provider } from "web3-core";
import MoneyBoxManagerContract from "../contracts/MoneyBoxManagerContract";
import OrderManagerContract from "../contracts/OrderManagerContract";
import ProviderStore from "../store/ProviderStore";



export default class W3Store {
    private providerStore: ProviderStore;

    public web3: Web3 | null = null;
    public om: OrderManagerContract;
    public mm: MoneyBoxManagerContract;

    constructor(providerStore: ProviderStore) {
        this.providerStore = providerStore;
        this.om = new OrderManagerContract(this);
        this.mm = new MoneyBoxManagerContract(this);
        makeObservable<this, "providerStore">(this, {
            providerStore: observable,
            web3: observable.ref,
            setWeb3: action,
            om: observable,
            mm: observable,
        });

        autorun(() => {
            if (this.providerStore.provider) {
                this.setWeb3(new Web3(this.providerStore.provider as provider));
            }
        })
    }

    setWeb3(web3: Web3) {
        this.web3 = web3;
    }
}