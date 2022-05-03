import OrderManagerContract from "core/provider/contracts/OrderManagerContract";
import Address from "core/provider/domain/Address";
import { makeObservable, observable } from "mobx";
import Order from "../../domain/Order";
import OrderDTO from "../../dtos/OrderDTO";
import OrderStore from "../../store/OrderStore";
import IOrderRepo from "../IOrderRepo";


export default class OrderRepo implements IOrderRepo {
    public constructor(protected readonly store: OrderStore, protected readonly contract: OrderManagerContract, protected readonly address: Address) {
        makeObservable<this, "contract">(this, {
            contract: observable,
        });
    }

    async createOrder(data: { seller: string, amount: string, id: string }, initAmount: string = data.amount): Promise<void> {
        if (!this.contract.instance) return;
        await this.contract.instance.methods
            .newOrder(data.seller, data.amount, data.id)
            .send({ from: this.address.address, value: initAmount});
    }

    async unlock(id: string, code: number): Promise<void> {
        if (!this.contract.instance) return;
        await this.contract.instance.methods
            .confirmReceived(id, code)
            .send({ from: this.address.address });
    }

    async refund(id: string): Promise<void> {
        if (!this.contract.instance) return;
        await this.contract.instance.methods
            .refund(id)
            .send({ from: this.address.address });
    }

    async getOrderById(id: string): Promise<Order | undefined> {
        if (!this.contract.instance) return undefined;
        const order: OrderDTO = await this.contract.instance.methods.getOrderById(id).call();
        return Order.create(this.store, id, order);
    }

    async getOrdersBySeller(seller: string): Promise<Order[]> {
        if (!this.contract.instance) return [];
        const ordertouples: IOrderTuple[] = await this.contract.instance.methods.getOrdersBySeller(seller).call();
        return ordertouples.map(tuple => Order.create(this.store, tuple.id, tuple.order));
    }

    async getOrdersByBuyer(buyer: string): Promise<Order[]> {
        if (!this.contract.instance) return [];
        const ordertouples: IOrderTuple[] =  await this.contract.instance.methods.getOrdersByBuyer(buyer).call();
        return ordertouples.map(tuple => Order.create(this.store, tuple.id, tuple.order));
    }
}