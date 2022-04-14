import PaymentDTO from "../dtos/PaymentDTO";
import IOrderRepo from "./IOrderRepo";


interface IMoneyBoxOrderRepo extends IOrderRepo {
    newPayment(orderId: string, amount: number): Promise<void>;
    getPayments(orderId: string): Promise<PaymentDTO[]>;
    getAmountToFill(orderId: string): Promise<number>;
}

export default IMoneyBoxOrderRepo;