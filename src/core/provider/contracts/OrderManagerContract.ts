import { action, makeObservable, observable } from "mobx";
import { Contract } from "web3-eth-contract";
import IContractRepo from "../repo/IContractRepo";
import OrderManagerContractRepo from "../repo/implementations/OrderManagerContractRepo";
import W3Store from "../domain/W3Store";


export default class OrderManagerContract {
    private readonly w3store: W3Store;
    public instance: Contract | null = null; 
    protected readonly repo: IContractRepo;

    constructor(w3store: W3Store, repo?: IContractRepo) {
        this.w3store = w3store;
        this.repo = repo || new OrderManagerContractRepo(w3store);
        makeObservable(this, {
            instance: observable.ref,
            setContract: action,
            init: action,
        });
    }

    setContract(contract: Contract) {
        this.instance = contract;
    }

    init() {
        this.setContract(this.repo.init());
    }
}