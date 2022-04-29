

interface ITransactionListElViewModel {
    paid: boolean;
    unlocked: boolean;
    refunded: boolean;
    canPay: boolean;
    canUnlock: boolean;
    canRefund: boolean;
    id: string;
    transaction: IOrder;
    from: "seller" | "buyer";
    onUnlock: () => void;
}

export default ITransactionListElViewModel;