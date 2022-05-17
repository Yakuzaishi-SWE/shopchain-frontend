import { autorun, makeAutoObservable } from "mobx";
import ProviderStore from "../store/ProviderStore";

export default class Address {
    private readonly store: ProviderStore;
    address: string | null;

    constructor(store: ProviderStore, address?: string) {
        this.store = store;
        this.address = address || null;
        makeAutoObservable(this, {}, { autoBind: true });

        autorun(() => {
            if (this.store.provider) {
                this.store.subscribeAddressChanged(this.setAddress);
            }
        })
    }

    setAddress(...address: unknown[]) {
        if (address.length > 0 && address[0] !== this.address && !!address[0] && typeof address[0] === "string")
            this.address = address[0];
    }

    static create(store: ProviderStore, address: string) {
        return new Address(store, address);
    }
}