import { providerStore } from "core/provider/store/ProviderStore";
import { action, makeObservable, observable } from "mobx";
import OrderManagerRepo from "../repo/implementations/OrderManagerRepo";
import IOrderManagerRepo from "../repo/IOrderManagerRepo";


export default class OrderManager {
    declare protected readonly repo: IOrderManagerRepo;

    count: number | null = null;
    balance: number | null = null;

    constructor(repo?: IOrderManagerRepo) {
        this.repo = repo || new OrderManagerRepo(providerStore.w3.om);

        makeObservable<this, "repo">(this, {
            repo: observable,
            count: observable,
            balance: observable,
            setCount: action,
            setBalance: action,
            getOrderCount: action,
            getContractBalance: action
        });
    }

    setCount(count: number) { this.count = count; }
    setBalance(balance: number) { this.balance = balance; }

    async getOrderCount() {
        const countOrUndefined = await this.repo.getOrderCount();
        if (countOrUndefined)
            this.setCount(countOrUndefined);
    }

    async getContractBalance() {
        const balanceOrUndefined = await this.repo.getContractBalance();
        if (balanceOrUndefined)
            this.setBalance(balanceOrUndefined);
    }

}