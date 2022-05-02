import Amount from "core/modules/order/domain/Amount";
import { makeAutoObservable } from "mobx";
import IPickAmountViewModel from "./IPickAmountViewModel";



export default class PickAmountViewModel implements IPickAmountViewModel {
    private readonly _amount: Amount = new Amount(0);
    
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get amount(): number {
        return this._amount.FTM;
    }


    setFTM(value: number): void {
        this._amount.setAmountFTM(value);
    }

    get wei(): number {
        return this._amount.wei;
    }

    createMoneyBox(): void {
        throw new Error("Method not implemented.");
    }
}