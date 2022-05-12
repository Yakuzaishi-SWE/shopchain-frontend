import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import ILockOverlayViewModel from "./ILockOverlayModel";


export default class LockOverlayViewModel implements ILockOverlayViewModel {    
    constructor(private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get isConnected() {
        if (!this.providerStore) return false;
        return this.providerStore.address.address ? true : false;
    }
}