import { useEffect, useState } from "react";
import useAddress from "./useAddress";
import useSinglePayment from "./useSinglePayment";

enum OrderState {
    NOT_CREATED = "0",
    CREATED = "1",
    FILLED = "2",
    CLOSED = "3",
    CANCELLED = "4",
}

const useOrder = (id: string): { order: IOrder | null, unlock: (code: number) => Promise<void> } => {
    const [order, setOrder] = useState<IOrder | null>(null);
    const contract = useSinglePayment();
    const address = useAddress();

    useEffect(() => {
        if (contract && id !== undefined)
            contract.methods
                .getOrderById(id)
                .call()
                .then((data: IOrder) => {
                    setOrder((data.state !== OrderState.NOT_CREATED) ? data : null)
                })
                .catch(err => console.error(err));
    }, [contract]);

    const unlock = async (code: number) => {
        if (contract && address) await contract.methods
            .confirmReceived(id, code)
            .send({ from: address, type: "0x1" });
        else throw new Error("Contract not loaded");
    }

    return { order, unlock };
}

export default useOrder;