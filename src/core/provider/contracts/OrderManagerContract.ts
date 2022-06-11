import { computed, makeObservable, observable } from "mobx";
import W3Store from "../domain/W3Store";
import IContractRepo from "../repo/IContractRepo";
import UniswapRouterRepo from "../repo/implementations/OrderManagerContractRepo";


export default class OrderManagerContract {
    private readonly w3store: W3Store;
    protected readonly repo: IContractRepo;

    constructor(w3store: W3Store, repo?: IContractRepo) {
        this.w3store = w3store;
        this.repo = repo || new UniswapRouterRepo(w3store);
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