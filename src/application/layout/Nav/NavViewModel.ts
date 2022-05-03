import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import { MetamaskErrorName, MetamaskErrorSeverity } from "types/enums";
import INavViewModel from "./INavViewModel";



export default class NavViewModel implements INavViewModel {

    private metamaskError: MetamaskError;
    

    constructor(private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });

        this.metamaskError = this.providerStore.getProviderState();
    }

    get address() {
        return this.providerStore.address.address || "";
    }

    get severity() {
        return this.metamaskError.severity;
    }

    get name() {
        return this.metamaskError.name;
    }

    get description() {
        return this.metamaskError.description;
    }
}