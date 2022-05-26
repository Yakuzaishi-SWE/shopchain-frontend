import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import ILockOverlayViewModel from "./ILockOverlayViewModel";


export default class LockOverlayViewModel implements ILockOverlayViewModel {    
    constructor(private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get isConnected() {
        return this.providerStore.state.isOK;
    }
}