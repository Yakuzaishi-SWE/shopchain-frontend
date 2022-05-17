import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import INavViewModel from "./INavViewModel";


export default class NavViewModel implements INavViewModel {    
    constructor(private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get address() {
        if (!this.providerStore.address.address) return "";
        return this.providerStore.address.address;
    }
}