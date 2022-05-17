import { useEffect } from "react";
import { OrderStateEnum } from "types/enums";
import useLoadingWrap from "./useLoadingWrap";
import useSmartContract from "./useSmartContract";



const useOrder = (id: string) => {
    const { loaded, error, result, setError, setResult, startLoading } = useLoadingWrap<IOrder | null>();
    const [contract] = useSmartContract();

    useEffect(() => {
        if (contract && id !== undefined) {
            startLoading();
            contract.methods
                .getOrderById(id)
                .call()
                .then((data: IOrder) => setResult((data.state !== OrderStateEnum.NOT_CREATED) ? data : null))
                .catch(err => setError(err));
        }
    }, [contract]);

    return { order: result, loaded, error };
};

export default useOrder;