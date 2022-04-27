import { makeAutoObservable } from "mobx";
import ITransactionListViewModel from "./ITransactionListViewModel";
import RootStore from "core/shared/RootStore";
import ProviderStore from "core/provider/store/ProviderStore";

export default class TransactionListViewModel implements ITransactionListViewModel {
    constructor(private readonly rootStore: RootStore, private readonly providerStore: ProviderStore) {
        makeAutoObservable(this);
    }

    private get address() {
        return this.providerStore.address.address;
    }

    private get orders() {
        if (!this.address) return [];
        return this.rootStore.orderStore.orders.getBySeller(this.address);
    }

    private get moneyboxOrders() {
        if (!this.address) return [];
        return this.rootStore.moneyBoxStore.orders.getBySeller(this.address);
    }

    get transactions() {
        return [...this.orders, ...this.moneyboxOrders];
    }

}