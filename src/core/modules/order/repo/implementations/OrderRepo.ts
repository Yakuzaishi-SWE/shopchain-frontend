import OrderManagerContract from "core/provider/contracts/OrderManagerContract";
import Address from "core/provider/domain/Address";
import { makeObservable, observable } from "mobx";
import IOrderRepo from "../IOrderRepo";


export default class OrderRepo implements IOrderRepo {
    public constructor(protected readonly contract: OrderManagerContract, protected readonly address: Address) { 
        makeObservable<this, "contract">(this, {
            contract: observable,
        });
    }

    async createOrder(data: { seller: string, amount: string, id: string }): Promise<void> {
        if (!this.contract.instance) return;
        await this.contract.instance.methods
            .newOrder(data.seller, data.amount, data.id)
            .send({ from: this.address.address, value: data.amount });
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
            .refundFromOwner(id)
            .send({ from: this.address.address });
    }

    async getOrderById(id: string): Promise<IOrder | undefined> {
        if (!this.contract.instance) return undefined;
        return await this.contract.instance.methods.getOrderById(id).call();
    }

    // async getOrdersBySeller(seller: string): Promise<IOrderTuple[]> {
    //     return await this.conract.methods.getOrdersBySeller(seller).call();
    // }
}