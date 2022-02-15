import { useEffect, useState } from "react";
import useSinglePayment from "./useSinglePayment";

const useOrders = (filter?: { seller?: string, buyer?: string }): {
    orders: IOrderTuple[],
    loading: boolean,
    create: (from: string, data: { seller: string, amount: string, id: string }) => Promise<void>,
    getBalance: () => Promise<number>
} => {
    const [orders, setOrders] = useState<IOrderTuple[]>([]);
    let [loading, setLoading] = useState(true);
    const contract = useSinglePayment();

    useEffect(() => {
        if (contract && filter !== undefined) {
            if (filter.seller !== undefined) {
                contract.methods
                    .getOrdersBySeller(filter.seller)
                    .call()
                    .then((data: IOrderTuple[]) => setOrders(data))
                    .catch(err => console.error(err));
            } else if (filter.buyer !== undefined) {
                contract.methods
                    .getOrdersByBuyer(filter.buyer)
                    .call()
                    .then(
                        (data: IOrderTuple[]) => setOrders(data),
                        setLoading(false)
                    )
                    .catch(err => console.error(err));
            }
        }
    }, [contract, filter?.seller, filter?.buyer]);

    const create = async (from: string, { seller, amount, id }: { seller: string, amount: string, id: string }) => {
        if (contract) {
            try {
                await contract.methods
                    .newOrder(seller, amount, id)
                    .send({ from, value: amount });
            } catch (err) {
                if ((err as any).code && (err as any).code === -32602) {
                    await contract.methods
                        .newOrder(seller, amount, id)
                        .send({ from, value: amount, type: "0x1" });
                }
                else {
                    throw err;
                }
            }
        }
        else throw new Error("Contract not loaded");
    }

    const getBalance = async (): Promise<number> => {
        if (contract) return await contract.methods
            .contractBalance()
            .call()
        else throw new Error("Contract not loaded");
    }

    return { orders, create, getBalance, loading };
}

export default useOrders;