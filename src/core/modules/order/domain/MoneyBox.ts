import { action, makeObservable, override } from "mobx";
import MoneyBoxOrderStore from "../store/MoneyBoxOrderStore";
import Order, { OrderProps } from "./Order";
import Payment from "./Payment";


export default class MoneyBox extends Order {
    declare protected readonly store: MoneyBoxOrderStore;

    constructor(store: MoneyBoxOrderStore, id: string, props: OrderProps) {
        super(store, id, props);
        makeObservable(this, {
            getAmountToFill: action,
            type: override,
        });
    }

    async getAmountToFill(): Promise<number> {
        return await this.store.getAmountToFill(this.id);
    }

    get payments(): Payment[] {
        return this.store.payments.get(this.id);
    }

    get type(): string {
        return "MONEYBOX";
    }
}