import Amount from "core/modules/order/domain/Amount";
import RootStore from "core/shared/RootStore";
import ComputedTask from "core/utils/ComputedTask";
import { makeAutoObservable } from "mobx";
import IPickAmountViewModel from "./IPickAmountViewModel";



export default class PickAmountViewModel implements IPickAmountViewModel {
    private readonly _initAmount: Amount = new Amount(0);
    
    private _id = "";
    private _amount: Amount = new Amount(0);
    private _sellerAddress = "0x7B44Fba1DB530C59DB6bbBF1FF886d4e49C07aE7";

    constructor(private readonly rootStore: RootStore)  {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setAmount(newAmount: string) {
        this._amount = new Amount(Number(newAmount));
    }

    get id(): string {
        return this._id;
    }

    setId(newId: string) {
        this._id = newId;
    }

    get initFTM(): number {
        return this._initAmount.FTM;
    }

    setInitFTM(value: number): void {
        this._initAmount.setAmountFTM(value);
    }

    get amountFtm(): number {
        return this._amount.FTM;
    }

    get initWei(): number {
        console.log(this._initAmount.wei);
        return this._initAmount.wei;
    }

    createMoneyBoxTask: ComputedTask<void, [data: { seller: string; amount: string; id: string; }, initAmount?: string | undefined], void> | null = null;
    createMoneyBox(): boolean {
        console.log(this._initAmount.wei,  this._amount.FTM);
        if(this._initAmount.FTM <= this._amount.FTM) {
            this.createMoneyBoxTask = this.rootStore.moneyBoxStore.createOrder({
                seller: this._sellerAddress,
                amount: String(this._amount.wei),
                id: this._id
            }, String(this._initAmount.wei));
            return false;
        } else {
            return true;
        }
    }

    get canRedirect(): boolean {
        if (!this.createMoneyBoxTask) return false;
        if (!this.createMoneyBoxTask.isLoaded) return false;
        return true;
    }

    get isBusy(): boolean {
        if (!this.createMoneyBoxTask) return false;
        return this.createMoneyBoxTask.isBusy;
    }
}