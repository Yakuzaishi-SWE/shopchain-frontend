import { useEffect } from "react";
import useLoadingWrap from "./useLoadingWrap";
import useSinglePayment from "./useSinglePayment";


const useOrderCount = () => {
    const contract = useSinglePayment();
    const { error, loaded, result, startLoading, setResult, setError } = useLoadingWrap<number>({onResult: (d) => {console.log(d);}, onError: (err )=> console.error(err)});

    useEffect(() => {
        if (contract) {
            startLoading();
            contract.methods
                .getOrderCount()
                .call()
                .then(data => setResult(data))
                .catch(err => setError(err));
        }
    }, [contract]);

    return { error, loaded, count: result };
};

export default useOrderCount;