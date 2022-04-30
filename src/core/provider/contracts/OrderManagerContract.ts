import { action, computed, makeObservable, observable } from "mobx";
import { Contract } from "web3-eth-contract";
import IContractRepo from "../repo/IContractRepo";
import OrderManagerContractRepo from "../repo/implementations/OrderManagerContractRepo";
import W3Store from "../domain/W3Store";
import TaskCache from "core/utils/TaskCache";


export default class OrderManagerContract {
    private readonly w3store: W3Store;
    protected _instance: Contract | null = null;
    protected readonly repo: IContractRepo;

    constructor(w3store: W3Store, repo?: IContractRepo) {
        this.w3store = w3store;
        this.repo = repo || new OrderManagerContractRepo(w3store);
        makeObservable<this, "setContract" | "w3store" | "_instance">(this, {
            w3store: observable,
            _instance: observable.ref,
            setContract: action,
            instance: computed,
        });
    }

    // private getInstanceCache: TaskCache<Contract | null> = new TaskCache(0);
    get instance() {
        const i = this._instance;
        const w = this.w3store.web3;
        if (!i && w) {
            this.setContract(this.repo.init());
        }
        return this._instance;
    }

    private setContract(contract: Contract) {
        this._instance = contract;
    }
}