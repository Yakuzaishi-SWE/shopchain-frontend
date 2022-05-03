import Order from "core/modules/order/domain/Order";
import ITransactionListElViewModel from "./ITransactionListElViewModel";
import { makeAutoObservable } from "mobx";

export default class TransactionListElViewModel implements ITransactionListElViewModel {

    constructor(private readonly order: Order) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get isPaid(): boolean {
        return (this.order.state.isPaid && this.order.state.isClosed);
    }

    get isUnlocked(): boolean {
        return this.order.state.isClosed;
    }

    get isRefunded(): boolean {
        return this.order.state.isCancelled;
    }

    canPay(): boolean {
        if (this.from != "seller" && this.order.state.isPaid) return true;
        return false;
    }

    canUnlock(): boolean {
        if (this.from != "seller" && this.order.state.isClosed) return true;
        return false;
    }

    canRefund(): boolean {
        if (this.from != "seller" && this.order.state.isCancelled) return true;
        return false;
    }

    get id(): string {
        return this.id;
    }

    get transaction(): Order {
        return this.order;
    }

    get from(): "seller" | "buyer" {
        return "seller";
    }

    onUnlock(): void {
        return;
    }
}