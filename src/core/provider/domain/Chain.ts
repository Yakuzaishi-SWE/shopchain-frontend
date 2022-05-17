import { autorun, makeAutoObservable } from "mobx";
import ProviderStore from "../store/ProviderStore";


export default class Chain {
    private readonly store: ProviderStore;
    public chainId: string | null = null;

    constructor(store: ProviderStore, chainId?: string) {
        this.store = store;
        this.chainId = chainId || null;
        makeAutoObservable(this);

        autorun(() => {
            if (this.store.provider) 
                this.store.subscribeChainChanged(this.setChainId);
        })
    }

    get isSet() {
        return this.chainId !== null;
    }

    get isFantomTestnet() {
        return this.chainId === "0xfa2";
    } 

    get isRopstenTestnet() {
        return this.chainId === "0x3";
    }

    setChainId(chainId: unknown) {
        if (chainId !== this.chainId && !!chainId && typeof chainId === "string")
            this.chainId = chainId;
    }
}