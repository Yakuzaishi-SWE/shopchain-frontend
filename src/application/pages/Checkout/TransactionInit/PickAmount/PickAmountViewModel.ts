import Amount from "core/modules/order/domain/Amount";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import { useLocation } from "react-router";
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

    get initFTM(): number {
        return this._initAmount.FTM;
    }

    setInitFTM(value: number): void {
        if (value > this._amount.FTM) return;
        this._initAmount.setAmountFTM(value);
    }

    get initWei(): number {
        return this._initAmount.wei;
    }

    back(): string {
        const location = useLocation();
        let path = location.pathname;
        const search = location.search;
        path = path.replace("/moneybox","");
        path = path + search;
        return path;
    }

    createMoneyBox(): void {
        this.rootStore.moneyBoxStore.createOrder({
            seller: this._sellerAddress,
            amount: String(this._amount.wei),
            id: this._id
        }, String(this._initAmount.wei));
    }
}