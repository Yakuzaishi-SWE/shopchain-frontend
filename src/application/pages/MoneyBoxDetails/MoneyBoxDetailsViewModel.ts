import Payment from "core/modules/order/domain/Payment";
import RootStore from "core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import IMoneyBoxDetailsViewModel from "./IMoneyBoxDetailsViewModel";

export default class MoneyBoxDetailsViewModel implements IMoneyBoxDetailsViewModel {
    _id: string = "";  

    constructor(private readonly rootStore: RootStore) {
        makeAutoObservable(this, {}, {autoBind: true,});
    }

    setOrderId(id: string) {
      this._id = id;
    }

    private get order() {
      return this.rootStore.moneyBoxStore.orders.getById(this.id);
      //return RootStore.getInstance().orderStore.getOrderById(this.id);
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

    async getFilledFtm() {
      return await this.getFilledWei() / 10 ** 18;
    }

    async getFilledWei() {
      return await this.order?.getAmountToFill() || 0;
    }

    async getFtmToFill() {
      let n = await this.getFilledFtm();
      return this.ftm - n;
    }

    async getWeiToFill() {
      let n = await this.getFilledWei();
      return this.wei - n;
    }

    get state() {
      return this.order?.state.toString() || "";
    }

    get isPaid() {
      return this.order?.state.isPaid || false;
    }

    unlock() {
      if(this.order) {
        this.order.unlock(this.order.unlockCode);
      }
    }

    refund() {
      if(this.order) {
        this.order.refund();
      }
    }

    get partecipants() {
      return this.order?.payments || [];
  }

  
}