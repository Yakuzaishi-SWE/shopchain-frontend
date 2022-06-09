import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";



export default class USDTtoFTMViewModel {

    private usdt: number|null = null;

    constructor(private readonly providerStore: ProviderStore = ProviderStore.getInstance()) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setUSDT(usdt: number) {
        this.usdt = usdt;
    }

    private get Task() {
        if (!this.usdt) return null;
        return this.providerStore.w3.
    }

    get isBusy() {
        if (!this.Task) return false;
        return this.Task.isBusy;
    }

    get isLoaded() {
        if (!this.Task) return false;
        return this.Task.isLoaded;
    }

    get isFailed() {
        if (!this.Task) return false;
        return this.Task.isFailed;
    }

    get value() {
        if (!this.Task) return null;
        return this.Task.result;
    }
}