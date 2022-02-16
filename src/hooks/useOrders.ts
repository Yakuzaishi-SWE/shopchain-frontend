import { useEffect } from "react";
import useLoadingWrap from "./useLoadingWrap";
import useSinglePayment from "./useSinglePayment";

const useOrders = (filter?: { seller?: string, buyer?: string }): {
    orders: IOrderTuple[] | undefined,
    error: string | undefined,
    loaded: boolean | undefined,
} => {
    const { error, loaded, result, setError, setResult, startLoading } = useLoadingWrap<IOrderTuple[]>();
    const contract = useSinglePayment();

    useEffect(() => {
        if (contract && filter !== undefined) {
            startLoading();
            if (filter.seller !== undefined) {
                contract.methods
                    .getOrdersBySeller(filter.seller)
                    .call()
                    .then((data: IOrderTuple[]) => setResult(data))
                    .catch(err => setError(err));
            } else if (filter.buyer !== undefined) {
                contract.methods
                    .getOrdersByBuyer(filter.buyer)
                    .call()
                    .then((data: IOrderTuple[]) => setResult(data))
                    .catch(err => setError(err));
            }
        }
    }, [contract, filter?.seller, filter?.buyer]);

    return { orders: result, error, loaded };
};

export default useOrders;