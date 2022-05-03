import MoneyBox from "core/modules/order/domain/MoneyBox";
import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import ComputedTask from "core/utils/ComputedTask";
import { makeAutoObservable } from "mobx";
import ITransactionListViewModel from "./ITransactionListViewModel";

export default class TransactionListViewModel implements ITransactionListViewModel {
    constructor(private readonly rootStore: RootStore, private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    private get address() {
        return this.providerStore.address.address;
    }

    private get ordersTask() {
        if (!this.address) return null;
        return this.rootStore.orderStore.getByBuyer(this.address);
    }

    private get ordersResult() {
        if (!this.ordersTask) return [];
        return this.ordersTask.result;
    }

    private get moneyboxOrdersTask() {
        if (!this.address) return null;
        return this.rootStore.moneyBoxStore.getByBuyer(this.address) as ComputedTask<MoneyBox[], [address: string]>;
    }

    private get moneyboxResult() {
        if (!this.moneyboxOrdersTask) return [];
        return this.moneyboxOrdersTask.result;
    }

    get transactions() {
        return [...this.ordersResult, ...this.moneyboxResult];
    }
}