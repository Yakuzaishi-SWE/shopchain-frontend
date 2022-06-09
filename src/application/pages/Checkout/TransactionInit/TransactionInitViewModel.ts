import Amount from "core/modules/order/domain/Amount";
import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import ITransactionInitViewModel from "./ITransactionInitViewModel";


export default class TransactionInitViewModel implements ITransactionInitViewModel {
    private _id = "";
    private _amount: Amount = new Amount(0);
    private _sellerAddress = "0x7B44Fba1DB530C59DB6bbBF1FF886d4e49C07aE7";

    constructor(private readonly providerStore: ProviderStore, private readonly rootStore: RootStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setAmount(newAmount: string) {
        this._amount = new Amount(Number(newAmount));
    }

    setId(newId: string) {
        this._id = newId;
    }

    // ------------------- VIEW SIDE -------------------------------

    get ftm(): number {
        return this._amount.USDT;
    }

    get wei(): number {
        return this._amount.wei;
    }

    get id(): string {
        return this._id;
    }

    get sellerAddress(): string {
        return this._sellerAddress;
    }

    createOrder(): void {
        this.rootStore.orderStore.createOrder({
            seller: this.sellerAddress,
            amount: String(this.wei),
            id: this.id
        });
    }

    createMoneyBox(): void {
        this.rootStore.moneyBoxStore.createOrder({
            seller: this.sellerAddress,
            amount: String(this.wei),
            id: this.id
        });
    }
}