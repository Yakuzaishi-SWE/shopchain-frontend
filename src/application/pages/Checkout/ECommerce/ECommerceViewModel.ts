import Amount from "core/modules/order/domain/Amount";
import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";
import IECommerceViewModel from "./IECommerceViewModel";


export default class ECommerceViewModel  implements IECommerceViewModel  {
    private _amount: Amount = new Amount(0);
    private _id = v4();
    private _redirectLink = "";

    constructor(private readonly providerStore: ProviderStore)  {
        makeAutoObservable(this, {}, {autoBind: true});
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

    get redirectLink(): string {
        return this._redirectLink;
    }

    setAmount(newAmount: number) {
        this._amount.setAmountFTM(newAmount);
    }

    handleSubmit() {
        const usp = new URLSearchParams();
        usp.set("amount", String(this.wei));
        this._redirectLink = `${this._id}/?${usp}`;
    }
}

