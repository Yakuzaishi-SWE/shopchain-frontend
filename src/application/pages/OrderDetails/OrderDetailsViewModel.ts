import ProviderStore from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
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

    get ftm() {
        return this.order?.amount?.FTM || 0;
    }

    get wei() {
        return this.order?.amount?.wei || 0;
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

    unlock() {
        if (this.order && this.unlockCode == this._code) {
            this.order.unlock(this.order.unlockCode);
            return false;
        }
        return true;
    }

    refund() {
        if (this.order) {
            this.order.refund();
            return false;
        }
        return true;
    }

    back(route: string) {
        if (route.includes("out")) return "/transaction/out";
        if (route.includes("in")) return "/transaction/in";
        return "";
    }

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

}