import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IMoneyBoxBalanceViewModel from "./IMoneyBoxBalanceViewModel";

export default class MoneyBoxBalanceViewModel  implements IMoneyBoxBalanceViewModel  {
    constructor(private readonly rootStore: RootStore)  {
        makeAutoObservable(this);
    }

    private get balance() {
        if (!providerStore.provider) return null;
        return this.rootStore.contractStore.moneyBoxManager.getContractBalance();
    }

    get isBusy(): boolean {
        return this.balance?.isBusy || false;
    }

    get balanceFTM(): number {
        if (!providerStore.provider) return 0;
        if (!this.balance) return 0;
        if (!this.balance.result) return 0;
        return this.balance.result.FTM;
    }

    get balanceWEI(): number {
        if (!providerStore.provider) return 0;
        if (!this.balance) return 0;
        if (!this.balance.result) return 0;
        return this.balance.result.wei;
    }
}