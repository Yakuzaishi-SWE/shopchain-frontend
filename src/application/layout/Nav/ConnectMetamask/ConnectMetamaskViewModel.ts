import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IConnectMetamaskViewModel from "./IConnectMetamaskViewModel";
import { MouseEventHandler } from "react";
import ProviderStore from "core/provider/store/ProviderStore";

export default class ConnectMetamaskViewModel implements IConnectMetamaskViewModel  {

    constructor(private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    connect(): void {
        this.providerStore.connect();
    }

}