import Amount from "core/modules/order/domain/Amount";
import RootStore from "core/shared/RootStore";
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

    setId(newId: string) {
        this._id = newId;
    }

    get amount(): number {
        return this._initAmount.FTM;
    }

    setInitFTM(value: number): void {
        this._initAmount.setAmountFTM(value);
    }

    get wei(): number {
        return this._initAmount.wei;
    }

    createMoneyBox(): void {
        this.rootStore.moneyBoxStore.createOrder({
            seller: this._sellerAddress,
            amount: String(this._amount.wei),
            id: this._id
        });
    }
}