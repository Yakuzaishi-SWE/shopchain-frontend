import Order from "core/modules/order/domain/Order";
import ITransactionListElViewModel from "./ITransactionListElViewModel";


export default class TransactionListElViewModel implements ITransactionListElViewModel {

    constructor(private readonly order: Order) {

    }

    get paid(): boolean {
        return this.order.paid;
    }

    get unlocked(): boolean {
        return this.order.unlocked;
    }

    get refunded(): boolean {
        return this.order.refunded;
    }

    get canPay(): boolean {
        return this.order.canPay;
    }

    get canUnlock(): boolean {
        return this.order.canUnlock;
    }

    get canRefund(): boolean {
        return this.order.canRefund;
    }

    get id(): string {
        return this.id;
    }

    get transaction(): IOrder {
        return this.transaction;
    };

    get from() {
        return this.from;
    }

    onUnlock(): void {
    }
}