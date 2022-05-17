import OrderManagerContract from "core/provider/contracts/OrderManagerContract";
import IOrderManagerRepo from "../IOrderManagerRepo";

export default class OrderManagerRepo implements IOrderManagerRepo {
    public constructor(protected readonly contract: OrderManagerContract) { }

    async getContractBalance(): Promise<number | undefined> {
        if (!this.contract.instance) return undefined;
        return await this.contract.instance.methods.contractBalance().call();
    }

    async getOrderCount(): Promise<number | undefined> {
        if (!this.contract.instance) return undefined;
        return await this.contract.instance.methods.getOrderCount().call();
    }
}