import { makeAutoObservable } from "mobx";
import Order from "./Order";


export default class OrderCollection<T extends Order> {
    orders: Map<string, T> = new Map<string, T>();

    get orderarr() {
        return [...this.orders.values()];
    }

    constructor() {
        makeAutoObservable(this);
    }

    getById(orderid: string) {
        return this.orders.get(orderid);
    }

    getBySeller(seller: string) {
        return this.orderarr.filter(order => order.sellerAddress === seller);
    }

    getByOwner(owner: string) {
        return this.orderarr.filter(order => order.ownerAddress === owner);
    }

    add(order: T) {
        this.orders.set(order.id, order);
    }

    upd(order: T) {
        const o = this.orders.get(order.id);
        if (o) {
            o.update(o);
        } else {
            this.orders.set(order.id, order);
        }
    }
}