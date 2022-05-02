import Amount from "core/modules/order/domain/Amount";
import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";
import IECommerceViewModel from "./IECommerceViewModel";


export default class ECommerceViewModel implements IECommerceViewModel {
    private _amount: Amount = new Amount(0);
    private _id = v4();
    public redirectLink: string | null = null;

    constructor(private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get amount(): number {
        return this._amount.FTM;
    }

    get wei(): number {
        return this._amount.wei;
    }

    get id(): string {
        return this._id;
    }

    setAmount(newAmount: number) {
        this._amount.setAmountFTM(newAmount);
    }

    handleSubmit() {
        const usp = new URLSearchParams();
        usp.set("amount", String(this.wei));
        this.redirectLink = `${this._id}/?${usp}`;
    }
}

