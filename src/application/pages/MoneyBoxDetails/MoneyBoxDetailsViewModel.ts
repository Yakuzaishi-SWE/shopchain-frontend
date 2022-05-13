import Amount from "core/modules/order/domain/Amount";
import MoneyBox from "core/modules/order/domain/MoneyBox";
import Payment from "core/modules/order/domain/Payment";
import ProviderStore, { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import ComputedTask from "core/utils/ComputedTask";
import { makeAutoObservable } from "mobx";
import IMoneyBoxDetailsViewModel from "./IMoneyBoxDetailsViewModel";

export default class MoneyBoxDetailsViewModel implements IMoneyBoxDetailsViewModel {
    _id = "";
    _feeAmount = new Amount(0);
    _code = 0;
    providerStore: ProviderStore;

    constructor(private readonly rootStore: RootStore, providerStore: ProviderStore = ProviderStore.getInstance()) {
        this.providerStore = providerStore;
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
        if(!this.moneyboxTask) return null;
        return this.moneyboxTask.result;
    }

    private get amountToFillTask() {
        if (!this.moneybox) return null;
        return this.moneybox.amountToFill;
    }

    private get partecipantsTask() {
        if (!this.moneybox) return null;
        return this.moneybox.payments;
    }

    private get partecipantsPayments() {
        if (!this.partecipantsTask) return [];
        if (!this.partecipantsTask.result) return [];
        return this.partecipantsTask.result;
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
        return this._id;
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

    get filledFtm()  {
        return this.AmountFilled.FTM;
    }

    get filledWei() {
        return this.AmountFilled.wei;
    }

    get ftmToFill() {
        return this.amountToFillTask?.result?.FTM || 0;
    }

    get weiToFill() {
        return this.amountToFillTask?.result?.wei || 0;
    }

    get state() {
        return this.moneybox?.state.toString() || "";
    }

    get isPaid() {
        return this.moneybox?.state.isPaid || false;
    }

    get isUnlocked() {
        return this.moneybox?.state.isClosed || false;
    }

    get isRefunded() {
        return this.moneybox?.state.isCancelled || false;
    }

    get feeAmountFtm() {
        return this._feeAmount.FTM;
    }

    get feeAmountWei() {
        return this._feeAmount.wei;
    }

    get unlockCode() {
        return this.moneybox?.unlockCode || 0;
    }

    get code() {
        return this._code;
    }

    setCode(code: number): void {
        this._code = code;
    }

    setFeeAmount(newAmount: number): void {
        this._feeAmount.setAmountFTM(newAmount);
    }

    unlockTask: ComputedTask<void, [string, number], void> | null = null;
    unlock() {
        if (this.moneybox && this.code === this.unlockCode) {
            this.unlockTask = this.moneybox.unlock(this.moneybox.unlockCode);
            return false;
        }
        return true;
    }

    refundTask: ComputedTask<void, [string], void> | null = null;
    refund() {
        if (this.moneybox) {
            this.refundTask = this.moneybox.refund();
            return false;
        }
        return true;
    }
    
    newPaymentTask: ComputedTask<void, [orderId: string, amount: string], void> | null = null;
    newPayment(): boolean {
        if(this._feeAmount.FTM <= this.ftmToFill) {
            if (this.moneybox) {
                this.newPaymentTask = this.rootStore.moneyBoxStore.newPayment(
                    this.id, 
                    String(this.feeAmountWei)
                );
                return false;
            }
            return true;
        } else {
            return true;
        }
    }

    get partecipants(){
        return this.partecipantsPayments;
    }

    dateNtime(partecipant: Payment): string {
        const date = new Date(partecipant.timestamp*1000);
        return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    back(route: string) {
        if(route.includes("out")) return "/transaction/out";
        if(route.includes("in")) return "/transaction/in";
        return "";
    }

    get isOwner() {
        if(!this.providerStore.address.address) return false;
        return this.ownerAddress.toLowerCase() === this.providerStore.address.address.toLowerCase();
    }

    get isSeller() {
        if(!this.providerStore.address.address) return false;
        return this.sellerAddress.toLowerCase() === this.providerStore.address.address.toLowerCase();
    }

    get date() {
        if (!this.moneybox) return "error";
        const date = new Date(this.moneybox.timestamp * 1000);
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    get isBusy(): boolean {
        if (this.newPaymentTask && this.newPaymentTask.isBusy) return true;
        if (this.unlockTask && this.unlockTask.isBusy) return true;
        if (this.refundTask && this.refundTask.isBusy) return true;
        return false;
    }

    get canReload() {
        if (this.newPaymentTask && this.newPaymentTask.isLoaded) return true;
        if (this.unlockTask && this.unlockTask.isLoaded) return true;
        if (this.refundTask && this.refundTask.isLoaded) return true;
        return false;
    }
}