import Payment from "core/modules/order/domain/Payment";
import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IContributesListViewModel from "./IContributesListViewModel";

export default class ContributesListViewModel implements IContributesListViewModel {

    constructor(private readonly rootStore: RootStore, private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    dateNtime(partecipant: Payment): string {
        const date = new Date(partecipant.timestamp*1000);
        return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    get contributes(): Payment[] {
        return [];
    }
}