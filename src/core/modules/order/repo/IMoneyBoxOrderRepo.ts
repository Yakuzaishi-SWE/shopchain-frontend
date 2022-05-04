import Amount from "../domain/Amount";
import MoneyBox from "../domain/MoneyBox";
import Payment from "../domain/Payment";
import IOrderRepo from "./IOrderRepo";


interface IMoneyBoxOrderRepo extends IOrderRepo {
    newPayment(orderId: string, amount: string): Promise<void>;
    getPayments(orderId: string): Promise<Payment[]>;
    getAmountToFill(orderId: string): Promise<Amount>;
    getOrderById(id: string): Promise<MoneyBox | undefined>;
    getOrdersBySeller(seller: string): Promise<MoneyBox[]>;
    getOrdersByBuyer(seller: string): Promise<MoneyBox[]>;
}

export default IMoneyBoxOrderRepo;