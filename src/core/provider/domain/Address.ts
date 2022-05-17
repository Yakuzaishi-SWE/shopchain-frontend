import { makeAutoObservable } from "mobx";
import ProviderStore from "../store/ProviderStore";

export default class Address {
    private readonly store: ProviderStore;
    address: string | null = null;

    constructor(store: ProviderStore) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get isSet() {
        return this.address !== null;
    }

    setAddress(accounts: unknown[]) {
        console.log(accounts);
        if (accounts.length > 0 && accounts[0] !== this.address) {
            this.address = ((accounts[0] as string));
        } else this.address = null;
    }
}