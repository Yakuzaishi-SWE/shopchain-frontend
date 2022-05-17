import { timeStamp } from "console";
import { computed, makeObservable, override } from "mobx";
import OrderDTO from "../dtos/OrderDTO";
import PaymentDTO from "../dtos/PaymentDTO";
import MoneyBoxOrderStore from "../store/MoneyBoxOrderStore";
import Amount from "./Amount";
import Order, { OrderProps } from "./Order";
import OrderState from "./OrderState";
import Payment from "./Payment";


export default class MoneyBox extends Order {
    declare protected readonly store: MoneyBoxOrderStore;

    constructor(store: MoneyBoxOrderStore, id: string, props: OrderProps) {
        super(store, id, props);
        makeObservable(this, {
            amountToFill: computed,
            type: override,
        });
    }

    get amountToFill() {
        return this.store.getAmountToFill(this.id);
    }

    get payments() {
        return this.store.getPayments(this.id);
    }

    get type(): string {
        return "MONEYBOX";
    }

    static create(store: MoneyBoxOrderStore, id: string, props: OrderDTO) {
        const amount = new Amount(props.amount);
        const state = new OrderState(props.state);
        const timestamp = props.timestamp;

        return new MoneyBox(
            store,
            id,
            {
                ...props,
                amount: amount,
                state: state,
                timestamp: timestamp,
            });
    }
    
    newPayment(store: MoneyBoxOrderStore, id: string, props: PaymentDTO) {
        const amount = new Amount(props.amount);
        const timestamp = props.timestamp;
        
        return new Payment(
            {
                ...props,
                amount,
                timestamp
            }
        );
    }
}