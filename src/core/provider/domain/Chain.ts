import { autorun, makeAutoObservable, reaction } from "mobx";
import ProviderStore from "../store/ProviderStore";


export default class Chain {
    private readonly store: ProviderStore;
    public chainId: string | null = null;

    constructor(store: ProviderStore) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
        reaction(() => this.store.provider, (p) => {
            window.location.reload();
            this.store.subscribeChainChanged(this.setChainId);
        });
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