import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import { MetamaskErrorName, MetamaskErrorSeverity } from "types/enums";
import INavViewModel from "./INavViewModel";



export default class NavViewModel implements INavViewModel {    
    constructor(private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get address() {
        return this.providerStore.address.address || "";
    }
}