import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";



export default class USDTtoFTMViewModel {

    private _usdt: number|null = null;

    constructor(private readonly providerStore: ProviderStore = ProviderStore.getInstance()) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setUSDT(usdt: number) {
        this._usdt = usdt;
    }

    get usdt() {
        return this._usdt;
    }

    private get wei() {
        if (!this._usdt) return 0;
        return this._usdt * 10 ** 18;
    }

    private get Task() {
        if (!this._usdt) return null;
        if (this.wei === 0) return 0;
        return this.providerStore.w3.uni.getAmountsIn(this.wei.toString());
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
        if(!this.Task.result) return null;
        return parseInt(this.Task.result)/10 ** 18;
    }
}