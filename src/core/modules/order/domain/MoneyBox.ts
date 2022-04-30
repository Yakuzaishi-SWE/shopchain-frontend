import TaskCacheBuilder from "core/utils/TaskCacheBuilder";
import { action, makeObservable, override } from "mobx";
import MoneyBoxOrderStore from "../store/MoneyBoxOrderStore";
import Amount from "./Amount";
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

    getAmountToFill = TaskCacheBuilder.build<Amount | null>()
        .task(async () => {
            const paymentOrUndefined = await this.store.getAmountToFill(this.id);
            return paymentOrUndefined ? new Amount(paymentOrUndefined) : null;
        })
        .result((d) => d)
        .revaildate;

    get payments(): Payment[] {
        return this.store.payments.get(this.id);
    }

    get type(): string {
        return "MONEYBOX";
    }
}