import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IBalanceViewModel from "./IBalanceViewModel";

export default class BalanceViewModel  implements IBalanceViewModel  {
    constructor(private readonly rootStore: RootStore)  {
        makeAutoObservable(this);
    }

    private get balance() {
        if (!providerStore.provider) return null;
        return this.rootStore.contractStore.orderManager.getContractBalance();
    }

    get isBusy(): boolean {
        return this.balance?.isBusy || false;
    }

    get balanceFTM(): number {
        if (!providerStore.provider) return -1;
        if (!this.balance) return -1;
        if (!this.balance.result) return -1;
        return this.balance.result.FTM;
    }

    get balanceWEI(): number {
        if (!providerStore.provider) return -1;
        if (!this.balance) return -1;
        if (!this.balance.result) return -1;
        return this.balance.result.wei;
    }
}