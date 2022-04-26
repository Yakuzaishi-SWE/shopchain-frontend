import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IBalanceViewModel from "./IBalanceViewModel";

export default class BalanceViewModel  implements IBalanceViewModel  {
    constructor(private readonly rootStore: RootStore)  {
        makeAutoObservable(this);
    }

    get balance(): number {
        return this.rootStore.contractStore.orderManager.balance || 999;
    }
}