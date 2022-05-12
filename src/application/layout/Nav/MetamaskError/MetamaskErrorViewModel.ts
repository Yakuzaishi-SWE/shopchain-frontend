import ProviderStore from "core/provider/store/ProviderStore";
import IMetamaskErrorViewModel from "./IMetamaskError";


export default class MetamaskErrorViewModel implements IMetamaskErrorViewModel {
    constructor(private readonly providerStore: ProviderStore) {}

    get severity(): MetamaskErrorSeverity {
        return this.providerStore.state.severity;
    }

    get name(): MetamaskErrorName {
        return this.providerStore.state.name;
    }

    get description(): string {
        return this.providerStore.state.description;
    }
}