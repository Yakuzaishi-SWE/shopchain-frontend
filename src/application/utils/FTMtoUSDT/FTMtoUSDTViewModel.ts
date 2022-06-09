import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";



export default class FTMtoUSDTViewModel {

    private ftm: number|null = null;

    constructor(private readonly providerStore: ProviderStore = ProviderStore.getInstance()) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setFTM(ftm: number) {
        this.ftm = ftm;
    }

    private get wei() {
        if (!this.ftm) return 0;
        return this.ftm * 10 ** 18;
    }

    private get Task() {
        if (!this.ftm) return null;
        return this.providerStore.w3.uni.getAmountsOut(this.wei.toString());
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