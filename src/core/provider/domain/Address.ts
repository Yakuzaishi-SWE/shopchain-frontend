import { autorun, makeAutoObservable, reaction } from "mobx";
import ProviderStore from "../store/ProviderStore";

export default class Address {
    private readonly store: ProviderStore;
    address: string | null = null;

    constructor(store: ProviderStore) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
        reaction(() => this.store.provider, (p) => {
            this.store.subscribeAddressChanged(this.setAddress);
        })
    }

    get isSet() {
        return this.address !== null;
    }

    setAddress(...address: unknown[]) {
        console.log(address);
        if (address.length > 0 && address[0] !== this.address && !!address[0] && typeof address[0] === "string")
            this.address = address[0];
    }
}