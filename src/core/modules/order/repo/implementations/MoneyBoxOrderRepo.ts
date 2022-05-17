/* eslint-disable sonarjs/no-duplicate-string */
import MoneyBoxManagerContract from "core/provider/contracts/MoneyBoxManagerContract";
import Address from "core/provider/domain/Address";
import { makeObservable } from "mobx";
import PaymentDTO from "../../dtos/PaymentDTO";
import IMoneyBoxOrderRepo from "../IMoneyBoxOrderRepo";
import OrderRepo from "./OrderRepo";


export default class MoneyBoxOrderRepo extends OrderRepo implements IMoneyBoxOrderRepo {
    public constructor(contract: MoneyBoxManagerContract, address: Address ) {
        super(contract, address);
        makeObservable(this);
    }

    async newPayment(orderId: string, amount: number): Promise<void> {
        if (!this.contract.instance) throw Error("Contract not loaded");
        await this.contract.instance.methods
            .newPayment(orderId, amount)
            .send({ from: this.address.address, value: amount });
    }

    async getPayments(orderId: string): Promise<PaymentDTO[]> {
        if (!this.contract.instance) throw Error("Contract not loaded");
        return await this.contract.instance.methods
            .getMoneyBoxPayments(orderId)
            .call();
    }

    async getAmountToFill(orderId: string): Promise<number> {
        if (!this.contract.instance) throw Error("Contract not loaded");
        return await this.contract.instance.methods
            .getAmountToFill(orderId)
            .call();
    }
}