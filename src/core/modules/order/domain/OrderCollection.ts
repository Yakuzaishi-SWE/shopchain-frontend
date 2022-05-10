import { makeAutoObservable } from "mobx";
import Order from "./Order";


export default class OrderCollection<T extends Order = Order> {
    orders: Map<string, T> = new Map<string, T>();

    get orderarr() {
        return [...this.orders.values()];
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    getById(orderid: string): T | null {
        return this.orders.get(orderid) || null;
    }

    getBySeller(seller: string) {
        return this.orderarr.filter(order => order.sellerAddress.toLowerCase() === seller.toLowerCase());
    }

    getByBuyer(buyer: string) {
        return this.orderarr.filter(order => order.ownerAddress.toLowerCase() === buyer.toLowerCase());
    }

    getAll() {
        return this.orderarr;
    }

    add(order: T) {
        this.orders.set(order.id, order);
    }

    upd(order: T) {
        const o = this.orders.get(order.id);
        if (o) {
            o.patch(o);
        } else {
            this.orders.set(order.id, order);
        }
    }
}