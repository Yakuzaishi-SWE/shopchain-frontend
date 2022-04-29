import Amount from "core/modules/order/domain/Amount";
import Order from "core/modules/order/domain/Order";

interface ITransactionInitViewModel {
    id: string,
    ftm: number,
    wei: number,
    sellerAddress: string,
    createOrder(): void,
    createMoneyBox(): void,
}

export default ITransactionInitViewModel;