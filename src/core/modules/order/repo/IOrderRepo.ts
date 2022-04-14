


interface IOrderRepo {
    createOrder(data: { seller: string, amount: string, id: string }): Promise<void>;
    unlock(id: string, code: number): Promise<void>;
    refund(id: string): Promise<void>;
    getOrderById(id: string): Promise<IOrder | undefined>;
    // getOrdersBySeller(seller: string): Promise<IOrderTuple[]>;
}

export default IOrderRepo;