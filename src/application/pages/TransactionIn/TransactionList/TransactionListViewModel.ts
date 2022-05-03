import { makeAutoObservable } from "mobx";
import RootStore from "core/shared/RootStore";
import ProviderStore from "core/provider/store/ProviderStore";
import ITransactionListViewModel from "./ITransactionListViewModel";
import ComputedTask from "core/utils/ComputedTask";
import MoneyBox from "core/modules/order/domain/MoneyBox";

export default class TransactionListViewModel implements ITransactionListViewModel {
    constructor(private readonly rootStore: RootStore, private readonly providerStore: ProviderStore) {
        makeAutoObservable(this);
    }

    private get address() {
        return this.providerStore.address.address;
    }

    private get ordersTask() {
        if (!this.address) return null;
        return this.rootStore.orderStore.getBySeller(this.address);
    }

    private get ordersResult() {
        if (!this.ordersTask) return [];
        return this.ordersTask.result;
    }

    private get moneyboxOrdersTask() {
        if (!this.address) return null;
        return this.rootStore.moneyBoxStore.getBySeller(this.address) as ComputedTask<MoneyBox[], [address: string]>;
    }

    private get moneyboxResult() {
        if (!this.moneyboxOrdersTask) return [];
        return this.moneyboxOrdersTask.result;
    }

    get transactions() {
        return [...this.ordersResult, ...this.moneyboxResult];
    }
}