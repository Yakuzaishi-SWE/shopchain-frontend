import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import ComputedTask from "core/utils/ComputedTask";
import { makeAutoObservable } from "mobx";
import IOrderDetailsViewModel from "./IOrderDetailsViewModel";

export default class OrderDetailsViewModel implements IOrderDetailsViewModel {
    _id = "";
    _code = 0;

    constructor(private readonly rootStore: RootStore, private readonly providerStore: ProviderStore) {
        makeAutoObservable(this, {}, { autoBind: true, });
    }

    setOrderId(id: string) {
        this._id = id;
    }

    setCode(code: number) {
        this._code = code;
    }

    private get orderTask() {
        if (!this.providerStore.w3.om.instance) return null;
        return this.rootStore.orderStore.getOrderById(this.id);
    }

    private get order() {
        if (!this.orderTask) return null;
        return this.orderTask.result;
    }

    // -------------------------------- view --------------------------------------
    get id() {
        return this._id;
    }

    get ownerAddress() {
        return this.order?.ownerAddress || "";
    }

    get sellerAddress() {
        return this.order?.sellerAddress || "";
    }

    get usdt() {
        return this.order?.amount?.USDT || 0;
    }

    get state() {
        return this.order?.state.toString() || "";
    }

    get date() {
        if (!this.order) return "error";
        const date = new Date(this.order.timestamp * 1000);
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    get unlockCode() {
        return this.order?.unlockCode || 0;
    }

    get isPaid() {
        return this.order?.state.isPaid || false;
    }

    unlockTask: ComputedTask<void, [string, number], void> | null = null;
    unlock() {
        if (this.order && this.unlockCode == this._code) {
            this.unlockTask = this.order.unlock(this.order.unlockCode);
            return false;
        }
        return true;
    }

    refundTask: ComputedTask<void, [string], void> | null = null;
    refund() {
        if (this.order) {
            this. refundTask = this.order.refund();
            return false;
        }
        return true;
    }

    // back(route: string) {
    //     if (route.includes("out")) return "/transaction/out";
    //     if (route.includes("in")) return "/transaction/in";
    //     return "";
    // }

    get isOwner() {
        if (!this.providerStore.address.address) return false;
        return this.ownerAddress.toLowerCase() === this.providerStore.address.address.toLowerCase();
    }

    get isSeller() {
        if (!this.providerStore.address.address) return false;
        return this.sellerAddress.toLowerCase() === this.providerStore.address.address.toLowerCase();
    }

    get code() {
        return this._code;
    }

    get isBusy() {
        if (this.unlockTask && this.unlockTask.isBusy) return true;
        if (this.refundTask && this.refundTask.isBusy) return true;
        return false;
    }

    get canReload() {
        if (this.unlockTask && this.unlockTask.isLoaded) return true;
        if (this.refundTask && this.refundTask.isLoaded) return true;
        return false;
    }

}