import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { Contract } from "web3-eth-contract";
import IContractRepo from "../repo/IContractRepo";
import OrderManagerContractRepo from "../repo/implementations/OrderManagerContractRepo";
import W3Store from "../domain/W3Store";
import TaskCache from "core/utils/TaskCache";


export default class OrderManagerContract {
    private readonly w3store: W3Store;
    protected readonly repo: IContractRepo;

    constructor(w3store: W3Store, repo?: IContractRepo) {
        this.w3store = w3store;
        this.repo = repo || new OrderManagerContractRepo(w3store);
        makeObservable<this, "w3store">(this, {
            w3store: observable,
            instance: computed,
        });
    }

    // private getInstanceCache: TaskCache<Contract | null> = new TaskCache(0);
    get instance() {
        if (!this.w3store.web3) return null;
        else return this.repo.init();
    }
}