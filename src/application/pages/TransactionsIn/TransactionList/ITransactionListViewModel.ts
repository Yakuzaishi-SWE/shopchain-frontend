import Order from "core/modules/order/domain/Order";

interface ITransactionListViewModel {
    transactions: Order[],
}

export default ITransactionListViewModel;