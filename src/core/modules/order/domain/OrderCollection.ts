import { makeAutoObservable } from "mobx";
import Order from "./Order";


export default class OrderCollection<T extends Order> {
    public orders: T[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public addOrder(order: T) {
        this.orders.push(order);
    }
}