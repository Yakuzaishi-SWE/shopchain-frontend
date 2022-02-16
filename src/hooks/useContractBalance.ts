import useLoadingWrap from "./useLoadingWrap";
import useSinglePayment from "./useSinglePayment";


const useContractBalance = () => {
    const contract = useSinglePayment();
    const { error, loaded, result, startLoading, setResult, setError } = useLoadingWrap<number>();

    const getBalance = () => {
        if (contract) {
            startLoading();
            contract.methods
                .contractBalance()
                .call()
                .then(data => setResult(data))
                .catch(err => setError(err));
        }
    };

    return { getBalance, error, loaded, balance: result };
};

export default useContractBalance;