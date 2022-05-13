import Order from "../domain/Order";



interface IOrderRepo {
    createOrder(data: { seller: string, amount: string, id: string},  initAmount?: string): Promise<void>;
    unlock(id: string, code: number): Promise<void>;
    refund(id: string): Promise<void>;
    getOrderById(id: string): Promise<Order>;
    getOrdersBySeller(seller: string): Promise<Order[]>;
    getOrdersByBuyer(buyer: string): Promise<Order[]>;
}

export default IOrderRepo;