import { makeAutoObservable } from "mobx";
import MoneyBoxManager from "../domain/MoneyBoxManager";
import OrderManager from "../domain/OrderManager";



export default class ContractStore {
    orderManager: OrderManager;
    moneyBoxManager: MoneyBoxManager;

    constructor() {
        this.orderManager = new OrderManager();
        this.moneyBoxManager = new MoneyBoxManager();
        makeAutoObservable(this);
    }
}