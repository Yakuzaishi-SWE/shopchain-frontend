import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IOrderDetailsViewModel from "./IOrderDetailsViewModel";

export default class OrderDetailsViewModel implements IOrderDetailsViewModel {
    _id = "";

    constructor(private readonly rootStore: RootStore) {
        makeAutoObservable(this, {}, { autoBind: true, });
    }

    setOrderId(id: string) {
        this._id = id;
    }

    private get orderTask() {
        return this.rootStore.orderStore.getOrderById(this.id);
    }

    private get order() {
        return this.orderTask.result;
    }

    // -------------------------------- view --------------------------------------
    get id() {
        return this.id;
    }

    get ownerAddress() {
        return this.order?.ownerAddress || "";
    }

    get sellerAddress() {
        return this.order?.sellerAddress || "";
    }

    get ftm() {
        return this.order?.amount?.FTM || 0;
    }

    get wei() {
        return this.order?.amount?.wei || 0;
    }

    get state() {
        return this.order?.state.toString() || "";
    }

    get isPaid() {
        return this.order?.state.isPaid || false;
    }

    unlock() {
        if (this.order) {
            this.order.unlock(this.order.unlockCode);
        }
    }

    refund() {
        if (this.order) {
            this.order.refund();
        }
    }
}