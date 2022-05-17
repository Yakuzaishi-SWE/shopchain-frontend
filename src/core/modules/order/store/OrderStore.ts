import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { action, makeObservable, observable } from "mobx";
import Order from "../domain/Order";
import OrderCollection from "../domain/OrderCollection";
import OrderRepo from "../repo/implementations/OrderRepo";
import IOrderRepo from "../repo/IOrderRepo";


export default class OrderStore {
    protected repo: IOrderRepo;

    readonly store: RootStore;
    readonly orders: OrderCollection<Order>;

    constructor(store: RootStore, repo?: IOrderRepo) {
        this.store = store;
        this.orders = new OrderCollection();
        this.repo = repo || new OrderRepo(providerStore.w3.om,  providerStore.address);
        makeObservable(this, {
            store: observable,
            orders: observable,
            getOrderById: action,
            createOrder: action,
            unlock: action,
            refund: action,
        });
    }

    async getOrderById(id: string): Promise<void> {
        const orderData = await this.repo.getOrderById(id);
        if (orderData) {
            this.orders.addOrder(Order.create(this, id, orderData));
        }
    }

    async createOrder(data: { seller: string, amount: string, id: string }): Promise<void> {
        await this.repo.createOrder(data);
    }

    async unlock(id: string, code: number): Promise<void> {
        await this.repo.unlock(id, code);
    }

    async refund(id: string): Promise<void> {
        await this.repo.refund(id);
    }
}