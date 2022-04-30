import TaskCache from "core/utils/TaskCache";
import { action, autorun, computed, makeObservable, observable } from "mobx";
import Web3 from "web3";
import { provider } from "web3-core";
import MoneyBoxManagerContract from "../contracts/MoneyBoxManagerContract";
import OrderManagerContract from "../contracts/OrderManagerContract";
import ProviderStore from "../store/ProviderStore";



export default class W3Store {
    private providerStore: ProviderStore;

    private _web3: Web3 | null = null;
    public om: OrderManagerContract;
    public mm: MoneyBoxManagerContract;

    constructor(providerStore: ProviderStore) {
        this.providerStore = providerStore;
        this.om = new OrderManagerContract(this);
        this.mm = new MoneyBoxManagerContract(this);
        makeObservable<this, "providerStore" | "_web3" | "setWeb3">(this, {
            providerStore: observable,
            _web3: observable.ref,
            web3: computed,
            setWeb3: action,
            om: observable,
            mm: observable,
        }, {autoBind: true});

        autorun(() => {
            if (this.providerStore.provider) {
                this.setWeb3(new Web3(this.providerStore.provider as provider));
            }
        })
    }

    // private getWeb3Cache: TaskCache<Web3 | null> = new TaskCache(0);
    get web3() {
        const w = this._web3;
        const p = this.providerStore.provider;
        if (!w && p) {
            this.setWeb3(new Web3(p as provider));
        }
        return this._web3;
    }

    private setWeb3(web3: Web3) {
        this._web3 = web3;
    }
}