
import useAddress from "./useAddress";
import useLoadingWrap from "./useLoadingWrap";
import useSinglePayment from "./useSinglePayment";

const useUnlock = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
    const { startLoading, loaded, error, setResult, setError } = useLoadingWrap<void>({onResult: onSuccess});
    const contract = useSinglePayment();
    const address = useAddress();

    const unlock = async (id: string, code: number) => {
        if (contract && address) {
            startLoading();
            contract.methods
                .confirmReceived(id, code)
                .send({ from: address })
                .then(() => setResult())
                .catch(err => {
                    if ((err as any).code && (err as any).code === -32602) {
                        contract.methods
                            .confirmReceived(id, code)
                            .send({ from: address, type: "0x1" })
                            .then(() => setResult())
                            .catch(err => setError(err));
                    }
                    else {
                        setError(err);
                    }
                });
        }
    };

    return { unlock, loaded, error };
};

export default useUnlock;
