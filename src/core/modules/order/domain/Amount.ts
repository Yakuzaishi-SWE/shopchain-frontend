import { makeAutoObservable } from "mobx";


export default class Amount {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
        makeAutoObservable(this);
    }

    get wei(): number {
        return this.amount;
    }

    get FTM(): number {
        return this.amount / 10 ** 18;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }

    static create(amount: number): Amount {
        return new Amount(amount);
    }
}