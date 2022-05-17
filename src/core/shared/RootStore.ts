import ContractStore from "core/modules/contract/store/ContractStore";
import MoneyBoxOrderStore from "core/modules/order/store/MoneyBoxOrderStore";
import OrderStore from "core/modules/order/store/OrderStore";
import { makeAutoObservable } from "mobx";


export default class RootStore {
    moneyBoxStore: MoneyBoxOrderStore;
    orderStore: OrderStore;
    contractStore: ContractStore;

    constructor() {
        this.moneyBoxStore = new MoneyBoxOrderStore(this);
        this.orderStore = new OrderStore(this);
        this.contractStore = new ContractStore();
        makeAutoObservable(this);
    }
}