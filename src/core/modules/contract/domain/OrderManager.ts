import Amount from "core/modules/order/domain/Amount";
import { providerStore } from "core/provider/store/ProviderStore";
import TaskCacheBuilder from "core/utils/TaskCacheBuilder";
import { action, makeObservable, observable, runInAction } from "mobx";
import OrderManagerRepo from "../repo/implementations/OrderManagerRepo";
import IOrderManagerRepo from "../repo/IOrderManagerRepo";


export default class OrderManager {
    declare protected readonly repo: IOrderManagerRepo;

    private count: number | null = null;
    private balance: Amount | null = null;

    constructor(repo?: IOrderManagerRepo) {
        this.repo = repo || new OrderManagerRepo(providerStore.w3.om);
        makeObservable<this, "repo" | "count" | "balance">(this, {
            repo: observable,
            count: observable,
            balance: observable,
            getOrderCount: action,
            getContractBalance: action
        }, { autoBind: true });
    }

    public getOrderCount = TaskCacheBuilder.build<number | null>()
        .task(async () => {
            const countOrUndefined = await this.repo.getOrderCount();
            if (countOrUndefined !== undefined)
                runInAction(() => this.count = countOrUndefined);
            return countOrUndefined || null;
        })
        .result(() => this.count).revaildate;

    public getContractBalance = TaskCacheBuilder.build<Amount | null>()
        .task(async () => {
            const balanceOrUndefined = await this.repo.getContractBalance();
            if (balanceOrUndefined !== undefined){
                const amount = new Amount(balanceOrUndefined);
                runInAction(() => this.balance = amount);
                return amount;
            } else return null;
        })
        .result(() => this.balance)
        .revaildate;

}