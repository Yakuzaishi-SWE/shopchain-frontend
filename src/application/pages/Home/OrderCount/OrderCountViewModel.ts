import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IOrderCountViewModel from "./IOrderCountViewModel";



export default class OrderCountViewModel  implements IOrderCountViewModel  {
    constructor(private readonly rootStore: RootStore)  {
        makeAutoObservable(this);
    }

    get isBusy(): boolean {
        return false;
    }

    get count(): number {
        return this.rootStore.contractStore.orderManager.count || 10000;
    }
}