import Amount from "core/modules/order/domain/Amount";
import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import IECommerceViewModel from "./IECommerceViewModel";


export default class ECommerceViewModel  implements IECommerceViewModel  {
    private _amount: Amount = new Amount(0);
    private _id: string = "";
    private _redirectLink: string|null = null;

    constructor(private readonly providerStore: ProviderStore)  {
        makeAutoObservable(this);
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

    get redirectLink(): string|null {
        return this._redirectLink;
    }

    setId(newId: string) {
        this._id = newId;
    }

    setAmount(newAmount: number) {
        this._amount.setAmount(newAmount);
    }

    handleSubmit() {
        const usp = new URLSearchParams();
        usp.set("amount", String(this.wei));
        this._redirectLink = `${this._id}/?${usp}`;
    }
}

