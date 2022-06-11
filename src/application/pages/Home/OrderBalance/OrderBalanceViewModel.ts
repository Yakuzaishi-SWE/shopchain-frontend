import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IBalanceViewModel from "./IOrderBalanceViewModel";

export default class BalanceViewModel  implements IBalanceViewModel  {
    constructor(private readonly rootStore: RootStore)  {
        makeAutoObservable(this);
    }

    private get balance() {
        if (!providerStore.provider) return null;
        return this.rootStore.contractStore.orderManager.getContractBalance();
    }

    get isLoaded(): boolean {
        if(!this.balance) return false;
        return this.balance.isLoaded;
    }

    get balanceUSDT(): number {
        if (!providerStore.provider) return 0;
        if (!this.balance) return 0;
        if (!this.balance.result) return 0;
        return this.balance.result.USDT;
    }

    get balanceWEI(): number {
        if (!providerStore.provider) return 0;
        if (!this.balance) return 0;
        if (!this.balance.result) return 0;
        return this.balance.result.wei;
    }
}