import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IMoneyBoxCountViewModel from "./IMoneyBoxCountViewModel";



export default class MoneyBoxCountViewModel  implements IMoneyBoxCountViewModel  {
    constructor(private readonly rootStore: RootStore)  {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get isBusy(): boolean {
        return false;
    }

    get count(): number {
        if (!providerStore.provider) return 0;
        return this.rootStore.contractStore.moneyBoxManager.getOrderCount().result || 0;
    }
}