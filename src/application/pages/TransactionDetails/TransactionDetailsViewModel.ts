import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import ITransactionDetailsViewModel from "./ITransactionDetailsViewModel";

export default class TransactionDetailsViewModel implements ITransactionDetailsViewModel {
    
    constructor(private readonly rootStore: RootStore) {
        makeAutoObservable(this);
    }

    get id() {
      return this.id;
    }

    get ownerAddress() {
      return this.ownerAddress;
    }

    get sellerAddress() {
      return this.sellerAddress;
    }

    get amount() {
      return this.amount;
    }

    get state() {
      return this.state;
    }

    isPaid() {
      return this.state === "FILLED";
    }
}