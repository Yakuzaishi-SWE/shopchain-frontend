import MoneyBox from "core/modules/order/domain/MoneyBox";
import Payment from "core/modules/order/domain/Payment";
import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IContributesListElViewModel from "./IContributesListViewModel";

export default class ContributesListViewModel implements IContributesListElViewModel {

    constructor(private readonly rootStore: RootStore, private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    private get contributesTask() {
        if (!this.providerStore.address.address) return null;
        const payments = this.rootStore.moneyBoxStore.getMoneyBoxesByParticipantAddress(this.providerStore.address.address);
        if (!payments) return null;
        return payments;
    }

    private getPartecipantsTask(moneybox: MoneyBox) {
        if (!moneybox) return null;
        return moneybox.payments;
    }

    private getPartecipantsPayments(moneybox: MoneyBox): Payment[] {
        const payments = this.getPartecipantsTask(moneybox);
        if (!payments) return [];
        if (!payments.result) return [];
        return payments.result;
    }


//----------------------------------- View ------------------------------------

    dateNtime(partecipant: Payment): string {
        const date = new Date(partecipant.timestamp*1000);
        return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    get moneyBoxesContributed(): MoneyBox[] {
        if (!this.contributesTask) return [];
        if (!this.contributesTask.result) return [];
        return this.contributesTask.result;
    }

    getContributesFromMoneyBox(moneybox: MoneyBox): Payment[] {
        return this.getPartecipantsPayments(moneybox).filter(payment => {
            if (!this.providerStore.address.address) return false;
            return payment.isFrom(this.providerStore.address.address);
        });
    }
}