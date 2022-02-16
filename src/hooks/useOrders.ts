import { create } from "domain";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
import useSinglePayment from "./useSinglePayment";

const useOrders = (filter?: { seller?: string, buyer?: string }): {
    orders: IOrderTuple[],
    loading: boolean,
    create: (from: string, data: { seller: string, amount: string, id: string }) => Promise<void>,
    getBalance: () => Promise<number>
} => {
    const [orders, setOrders] = useState<IOrderTuple[]>([]);
    let [loading, setLoading] = useState(false);
    const contract = useSinglePayment();

    useEffect(() => {
        if (contract && filter !== undefined) {
            setLoading(true)
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
            setLoading(true)
            try {
                contract.methods
                    .newOrder(seller, amount, id)
                    .send({ from, value: amount })
                    .then((result) => {
                        setLoading(false)
                    })
                    .catch((err) =>
                        setLoading(false)
                    );
            } catch (err) {
                if ((err as any).code && (err as any).code === -32602) {
                    contract.methods
                        .newOrder(seller, amount, id)
                        .send({ from, value: amount, type: "0x1" })
                        .then(
                            setLoading(false)
                        )
                        .catch(
                            setLoading(false)
                        );
                }
                else {
                    setLoading(false);
                    throw err;
                }
            }
        }
        else throw new Error("Contract not loaded");
    }

    /*
    const create = async (from: string, { seller, amount, id }: { seller: string, amount: string, id: string }) => {
        if (contract) {
            setLoading(true)
            try {
                await contract.methods
                    .newOrder(seller, amount, id)
                    .send({ from, value: amount })
                    .then(
                        console.log("FATTO"),
                        setLoading(false)
                    );
            } catch (err) {
                if ((err as any).code && (err as any).code === -32602) {
                    await contract.methods
                        .newOrder(seller, amount, id)
                        .send({ from, value: amount, type: "0x1" })
                        .then(
                            setLoading(false)
                        );
                }
                else {
                    throw err;
                }
            }
        }
        else throw new Error("Contract not loaded");
    }
    */

    const getBalance = async (): Promise<number> => {
        if (contract) return await contract.methods
            .contractBalance()
            .call()
        else throw new Error("Contract not loaded");
    }

    return { orders, create, getBalance, loading };
}

export default useOrders;