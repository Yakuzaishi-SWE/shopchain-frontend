import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IOrderCountViewModel from "./IOrderCountViewModel";



export default class OrderCountViewModel  implements IOrderCountViewModel  {
    constructor(private readonly rootStore: RootStore)  {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get isBusy(): boolean {
        return false;
    }

    get count(): number {
        if (!providerStore.provider) return -1;
        return this.rootStore.contractStore.orderManager.getOrderCount().result || -1;
    }
}