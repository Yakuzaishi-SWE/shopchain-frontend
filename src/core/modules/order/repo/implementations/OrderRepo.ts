import OrderManagerContract from "core/provider/contracts/OrderManagerContract";
import Address from "core/provider/domain/Address";
import UniswapRouter from "core/provider/contracts/UniswapRouter";
import { makeObservable, observable } from "mobx";
import Order from "../../domain/Order";
import OrderDTO from "../../dtos/OrderDTO";
import OrderStore from "../../store/OrderStore";
import IOrderRepo from "../IOrderRepo";


export default class OrderRepo implements IOrderRepo {
    
    public constructor(protected readonly store: OrderStore, protected readonly contract: OrderManagerContract, protected readonly uniswap: UniswapRouter, protected readonly address: Address) {
        makeObservable<this, "contract">(this, {
            contract: observable,
        });
    }

    async createOrder(data: { seller: string, amount: string,  id: string }, initAmount: string = data.amount): Promise<void> {
        if (!this.contract.instance) throw new Error("Contract not init");
        if (!this.uniswap.instance) throw new Error("Uniswap not init");
        const totAmount = await this.uniswap.instance.methods.getAmountsOut(data.amount, this.uniswap.path).call();
        let amounts;
        if (parseInt(initAmount) > 0) {
        const partialAmout = await this.uniswap.instance.methods.getAmountsOut(initAmount, this.uniswap.path).call();
        amounts = [totAmount[1], partialAmout[1]];
        } else {
            amounts = [totAmount[1]];
        }
        await this.contract.instance.methods
            .newOrder(data.seller, data.amount, amounts, data.id)
            .send({ from: this.address.address, value: initAmount });
    }

    async unlock(id: string, code: number): Promise<void> {
        if (!this.contract.instance) throw new Error("Contract not init");
        await this.contract.instance.methods
            .confirmReceived(id, code)
            .send({ from: this.address.address });
    }

    async refund(id: string): Promise<void> {
        if (!this.contract.instance) throw new Error("Contract not init");
        await this.contract.instance.methods
            .refund(id)
            .send({ from: this.address.address });
    }

    async getOrderById(id: string): Promise<Order> {
        if (!this.contract.instance) throw new Error("Contract not init");
        const order: OrderDTO = await this.contract.instance.methods.getOrderById(id).call();
        return Order.create(this.store, id, order);
    }

    async getOrdersBySeller(seller: string): Promise<Order[]> {
        if (!this.contract.instance) throw new Error("Contract not init");
        const ordertouples: IOrderTuple[] = await this.contract.instance.methods.getOrdersBySeller(seller).call();
        return ordertouples.map(tuple => Order.create(this.store, tuple.id, tuple.order));
    }

    async getOrdersByBuyer(buyer: string): Promise<Order[]> {
        if (!this.contract.instance) throw new Error("Contract not init");
        const ordertouples: IOrderTuple[] = await this.contract.instance.methods.getOrdersByBuyer(buyer).call();
        return ordertouples.map(tuple => Order.create(this.store, tuple.id, tuple.order));
    }
}