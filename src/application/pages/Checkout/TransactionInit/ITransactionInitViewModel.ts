import Order from "core/modules/order/domain/Order";

interface ITransactionInitViewModel {
    id: string,
    transaction: ITransaction,
    onCreate: () => {}
}

export default ITransactionInitViewModel;