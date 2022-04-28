import Order from "core/modules/order/domain/Order";


export default class TransactionListElViewModel implements ITransactionListElViewModel{

    constructor(private readonly order: Order) {

    }

    get isPaid(): boolean {
        return this.order.isPaid;
    }
}