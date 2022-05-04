/* eslint-disable sonarjs/no-duplicate-string */
import MoneyBoxManagerContract from "core/provider/contracts/MoneyBoxManagerContract";
import Address from "core/provider/domain/Address";
import Amount from "../../domain/Amount";
import MoneyBox from "../../domain/MoneyBox";
import Payment from "../../domain/Payment";
import OrderDTO from "../../dtos/OrderDTO";
import PaymentDTO from "../../dtos/PaymentDTO";
import MoneyBoxOrderStore from "../../store/MoneyBoxOrderStore";
import IMoneyBoxOrderRepo from "../IMoneyBoxOrderRepo";
import OrderRepo from "./OrderRepo";


export default class MoneyBoxOrderRepo extends OrderRepo implements IMoneyBoxOrderRepo {
    declare protected readonly store: MoneyBoxOrderStore;

    public constructor(store: MoneyBoxOrderStore, contract: MoneyBoxManagerContract, address: Address ) {
        super(store, contract, address);
    }

    async getOrderById(id: string): Promise<MoneyBox | undefined> {
        if (!this.contract.instance) return undefined;
        const order: OrderDTO = await this.contract.instance.methods.getOrderById(id).call();
        return MoneyBox.create(this.store, id, order);
    }

    async getOrdersBySeller(seller: string): Promise<MoneyBox[]> {
        if (!this.contract.instance) return [];
        const ordertouples: IOrderTuple[] = await this.contract.instance.methods.getOrdersBySeller(seller).call();
        return ordertouples.map(tuple => MoneyBox.create(this.store, tuple.id, tuple.order));
    }

    async getOrdersByBuyer(buyer: string): Promise<MoneyBox[]> {
        if (!this.contract.instance) return [];
        const ordertouples: IOrderTuple[] =  await this.contract.instance.methods.getOrdersByBuyer(buyer).call();
        return ordertouples.map(tuple => MoneyBox.create(this.store, tuple.id, tuple.order));
    }

    async newPayment(orderId: string, amount: string): Promise<void> {
        if (!this.contract.instance) throw Error("Contract not loaded");
        await this.contract.instance.methods
            .newPayment(orderId, amount)
            .send({ from: this.address.address, value: amount });
    }

    async getPayments(orderId: string): Promise<Payment[]> {
        if (!this.contract.instance) throw Error("Contract not loaded");
        const data: PaymentDTO[] = await this.contract.instance.methods
            .getMoneyBoxPayments(orderId)
            .call();
        return data.map(el => Payment.create(el));
    }

    async getAmountToFill(orderId: string): Promise<Amount> {
        if (!this.contract.instance) throw Error("Contract not loaded");
        const amount = await this.contract.instance.methods
            .getAmountToFill(orderId)
            .call();
        return Amount.create(amount);
    }
}