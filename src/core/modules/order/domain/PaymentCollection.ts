import { makeAutoObservable } from "mobx";
import Payment from "./Payment";



export default class PaymentCollection {
    // maps orderid => Payment[]
    payments: Map<string, Payment[]> = new Map<string, Payment[]>();

    constructor() {
        makeAutoObservable(this);
    }

    add(orderid: string, payment: Payment) {
        if (!this.payments.has(orderid)) {
            this.payments.set(orderid, []);
        }
        const paymentarr = this.payments.get(orderid);
        if (paymentarr) paymentarr.push(payment);
    }

    set(orderid: string, payments: Payment[]) {
        this.payments.set(orderid, payments);
    }

    get(orderid: string) {
        return this.payments.get(orderid) || [];
    }
}