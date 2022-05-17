import { makeAutoObservable } from "mobx";
import Payment from "./Payment";



export default class PaymentCollection {
    // maps orderid => Payment[]
    payments: Map<string, Payment[]> = new Map<string, Payment[]>();

    constructor() {
        makeAutoObservable(this);
    }

    add(orderid: string, ...payments: Payment[]) {
        this.payments.set(orderid, payments);
    }

    get(orderid: string) {
        return this.payments.get(orderid) || [];
    }
}