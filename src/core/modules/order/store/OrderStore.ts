import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import TaskCacheBuilder from "core/utils/TaskCacheBuilder";
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

    readonly getOrderById = TaskCacheBuilder.build<Order | null, [id: string]>()
        .task(async (id) => {
            const orderData = await this.repo.getOrderById(id);
            if (orderData) {
                const o = Order.create(this, id, orderData);
                this.orders.add(o);
                return o;
            } else return null;
        })
        .result((o) => o ? this.orders.getById(o.id): null)
        .id((id) => id)
        .revaildate

    readonly createOrder = TaskCacheBuilder.build<void, [{ seller: string, amount: string, id: string }]>()
        .task(async (data) => {
            await this.repo.createOrder(data);
        })
        .expireIn(0)
        .result(() => {})
        .revaildate;

    readonly unlock = TaskCacheBuilder.build<void, [string, number]>()
        .task(async (id: string, code: number) => {
            return await this.repo.unlock(id, code);
        })
        .id((id: string, code: number) => `${id}-${code}`)
        .expireIn(0)
        .result(() => {})
        .revaildate;

    readonly refund  = TaskCacheBuilder.build<void, [string]>()
        .task(async (id: string) => {
            return await this.repo.refund(id);
        })
        .id((id: string) => id)
        .expireIn(0)
        .result(() => {})
        .revaildate;
}