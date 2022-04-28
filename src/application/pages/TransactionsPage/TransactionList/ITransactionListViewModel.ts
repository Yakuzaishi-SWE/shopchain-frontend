import Order from "core/modules/order/domain/Order";
import { OrderStateEnum } from "types/enums";

interface ITransactionListViewModel {
    transactions: Order[],
    from: "seller" | "buyer",
    state?: OrderStateEnum,
}

export default ITransactionListViewModel;