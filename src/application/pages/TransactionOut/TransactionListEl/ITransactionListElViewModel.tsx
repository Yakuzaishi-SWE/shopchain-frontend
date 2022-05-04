import Order from "core/modules/order/domain/Order";

interface ITransactionListElViewModel {
    isPaid: boolean;
    isUnlocked: boolean;
    isRefunded: boolean;
    id: string;
    transaction: Order;
    orderType: string;
}

export default ITransactionListElViewModel;