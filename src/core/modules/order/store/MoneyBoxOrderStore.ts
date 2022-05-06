import { providerStore } from "core/provider/store/ProviderStore";
import RootStore from "core/shared/RootStore";
import TaskCacheBuilder from "core/utils/TaskCacheBuilder";
import { makeObservable, observable } from "mobx";
import Amount from "../domain/Amount";
import MoneyBox from "../domain/MoneyBox";
import OrderCollection from "../domain/OrderCollection";
import Payment from "../domain/Payment";
import PaymentCollection from "../domain/PaymentCollection";
import IMoneyBoxOrderRepo from "../repo/IMoneyBoxOrderRepo";
import MoneyBoxOrderRepo from "../repo/implementations/MoneyBoxOrderRepo";
import OrderStore from "./OrderStore";


export default class MoneyBoxOrderStore extends OrderStore {
    declare protected repo: IMoneyBoxOrderRepo;

    private readonly payments: PaymentCollection;
    declare protected readonly orders: OrderCollection<MoneyBox>;

    constructor(store: RootStore, repo?: IMoneyBoxOrderRepo) {
        super(store);
        this.repo = repo || new MoneyBoxOrderRepo(this, providerStore.w3.mm, providerStore.address);
        this.payments = new PaymentCollection();
        makeObservable<this, "payments">(this, {
            payments: observable,
            getOrderById: false,
            newPayment: false,
            getPayments: false,
            getAmountToFill: false,
        });
    }

    readonly newPayment = TaskCacheBuilder.build<void, [orderId: string, amount: string]>()
        .expireIn(0)
        .task(async (orderId, amount) => {
            await this.repo.newPayment(orderId, amount);
        })
        .id((orderId, amount) => `${orderId}-${amount}`)
        .result(() => { return; })
        .revaildate;

    readonly getPayments = TaskCacheBuilder.build<Payment[], [id: string]>()
        .task(async (orderid: string) => {
            const pays = await this.repo.getPayments(orderid);
            this.payments.add(orderid, ...pays);
            return pays;
        })
        .id((id) => id)
        .result((d, id) => this.payments.get(id))
        .revaildate;

    readonly getAmountToFill = TaskCacheBuilder.build<Amount | null, [id: string]>()
        .task(async (id) => {
            return await this.repo.getAmountToFill(id);
        })
        .id((id) => id)
        .result((data) => data)
        .revaildate;

    // readonly getPaymentsByBuyer = TaskCacheBuilder.build<Payment[], [buyer: string]>()
    //     .task(async (buyer: string) => {
    //         const pays = await this.repo.getPaymentsByBuyer(buyer);
    //         return pays;
    //     })
    //     .id((buyer) => buyer)
    //     .result((d, buyer) => )
    //     .revaildate;
}