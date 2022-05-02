import Amount from "core/modules/order/domain/Amount";
import MoneyBox from "core/modules/order/domain/MoneyBox";
import Payment from "core/modules/order/domain/Payment";
import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import ComputedTask from "core/utils/ComputedTask";
import { makeAutoObservable } from "mobx";
import IMoneyBoxDetailsViewModel from "./IMoneyBoxDetailsViewModel";

export default class MoneyBoxDetailsViewModel implements IMoneyBoxDetailsViewModel {
    _id = "";

    constructor(private readonly rootStore: RootStore) {
        makeAutoObservable(this, {}, { autoBind: true, });
    }

    setOrderId(id: string) {
        this._id = id;
    }

    private get moneyboxTask() {
        if (!providerStore.provider) return null;
        return this.rootStore.moneyBoxStore.getOrderById(this._id) as ComputedTask<MoneyBox | null, [id: string], MoneyBox | null>;
    }

    private get moneybox() {
        return this.moneyboxTask?.result;
    }

    private get amountToFillTask() {
        if (!this.moneybox) return null;
        return this.moneybox.amountToFill;
    }

    private get partecipantsTask() {
        if (!this.moneybox) return null;
        return this.moneybox.payments;
    }

    private get amountFilledWei() {
        if (!this.moneybox) return 0;
        if (!this.amountToFillTask) return 0;
        if (!this.amountToFillTask.result) return 0;
        return this.moneybox.amount.wei - this.amountToFillTask.result.wei;
    }

    private get AmountFilled() {
        return new Amount(this.amountFilledWei);
    }

    // -------------------------------- view --------------------------------------
    get id() {
        return this.id;
    }

    get ownerAddress() {
        return this.moneybox?.ownerAddress || "";
    }

    get sellerAddress() {
        return this.moneybox?.sellerAddress || "";
    }

    get ftm() {
        return this.moneybox?.amount?.FTM || 0;
    }

    get wei() {
        return this.moneybox?.amount?.wei || 0;
    }

    get getFilledFtm()  {
        return this.AmountFilled.FTM;
    }

    get getFilledWei() {
        return this.AmountFilled.wei;
    }

    get getFtmToFill() {
        return this.amountToFillTask?.result?.FTM || 0;
    }

    get getWeiToFill() {
        return this.amountToFillTask?.result?.wei || 0;
    }

    get state() {
        return this.moneybox?.state.toString() || "";
    }

    get isPaid() {
        return this.moneybox?.state.isPaid || false;
    }

    unlock() {
        if (this.moneybox) {
            this.moneybox.unlock(this.moneybox.unlockCode);
        }
    }

    refund() {
        if (this.moneybox) {
            this.moneybox.refund();
        }
    }

    get partecipants() {
        if (!this.partecipantsTask) return [];
        if (!this.partecipantsTask.result) return [];
        return this.partecipantsTask.result;
    }


}