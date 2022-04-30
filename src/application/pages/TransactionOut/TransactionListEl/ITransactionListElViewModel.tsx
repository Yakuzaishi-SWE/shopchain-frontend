import Order from "core/modules/order/domain/Order";

interface ITransactionListElViewModel {
    isPaid: boolean;
    isUnlocked: boolean;
    isRefunded: boolean;
    canPay(): boolean;
    canUnlock(): boolean;
    canRefund(): boolean;
    id: string;
    transaction: Order;
    from: "seller" | "buyer";
    onUnlock(): void;
}

export default ITransactionListElViewModel;