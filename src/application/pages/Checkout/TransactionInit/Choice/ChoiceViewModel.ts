import Amount from "core/modules/order/domain/Amount";
import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import ComputedTask from "core/utils/ComputedTask";
import { makeAutoObservable } from "mobx";
import IChoiceViewModel from "./IChoiceViewModel";


export default class ChoiceViewModel implements IChoiceViewModel {
    private _id = "";
    private _amount: Amount = new Amount(0);
    private _sellerAddress = "0x7B44Fba1DB530C59DB6bbBF1FF886d4e49C07aE7";

    constructor(private readonly providerStore: ProviderStore, private readonly rootStore: RootStore)  {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setAmount(newAmount: string) {
        this._amount = new Amount(Number(newAmount));
    }

    setId(newId: string) {
        this._id = newId;
    }

    // ------------------- VIEW SIDE -------------------------------

    createOrderTask: ComputedTask<void, [data: { seller: string; amount: string; id: string; }, initAmount?: string | undefined], void> | null = null;
    createOrder(): void {
        this.createOrderTask = this.rootStore.orderStore.createOrder({
            seller: this._sellerAddress,
            amount: String(this._amount.wei),
            id: this._id
        });
    }

    get canRedirect(): boolean {
        if (!this.createOrderTask) return false;
        if (!this.createOrderTask.isLoaded) return false;
        return true;
    }

    get isBusy(): boolean {
        if (!this.createOrderTask) return false;
        return this.createOrderTask.isBusy;
    }
}