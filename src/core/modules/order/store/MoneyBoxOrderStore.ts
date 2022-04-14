import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import { action, makeObservable, observable } from "mobx";
import MoneyBox from "../domain/MoneyBox";
import OrderCollection from "../domain/OrderCollection";
import Payment from "../domain/Payment";
import PaymentCollection from "../domain/PaymentCollection";
import IMoneyBoxOrderRepo from "../repo/IMoneyBoxOrderRepo";
import MoneyBoxOrderRepo from "../repo/implementations/MoneyBoxOrderRepo";
import OrderStore from "./OrderStore";


export default class MoneyBoxOrderStore extends OrderStore {
    repo: IMoneyBoxOrderRepo;
    
    readonly payments: PaymentCollection;
    declare readonly orders: OrderCollection<MoneyBox>;

    constructor(store: RootStore, repo?: IMoneyBoxOrderRepo) {
        const temprepo = repo || new MoneyBoxOrderRepo(providerStore.w3.mm, providerStore.address);
        super(store, temprepo); 
        this.repo = temprepo;
        this.payments = new PaymentCollection();  
        makeObservable(this,{
            payments: observable,
            newPayment: action,
            getPayments: action,
            getAmountToFill: action,
        });
    }

    async newPayment(orderId: string, amount: number) {
        await this.repo.newPayment(orderId, amount);
    }

    async getPayments(orderId: string) {
        const dtos = await this.repo.getPayments(orderId);
        const pays = dtos.map(dto => Payment.create(dto));
        this.payments.set(orderId, pays);
    }

    async getAmountToFill(orderId: string): Promise<number> {
        return await this.repo.getAmountToFill(orderId);
    }
}