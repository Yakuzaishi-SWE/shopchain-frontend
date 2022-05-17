import Order from "core/modules/order/domain/Order";
import ITransactionListElViewModel from "./ITransactionListElViewModel";
import { makeAutoObservable } from "mobx";

export default class TransactionListElViewModel implements ITransactionListElViewModel {

    constructor(private readonly order: Order) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get isPaid(): boolean {
        return this.order.state.isPaid;
    }

    get isUnlocked(): boolean {
        return this.order.state.isClosed;
    }

    get isRefunded(): boolean {
        return this.order.state.isCancelled;
    }

    get id(): string {
        return this.id;
    }

    get transaction(): Order {
        return this.order;
    }

    get orderType(): string {
        return this.order.type.toLowerCase();
    }
}