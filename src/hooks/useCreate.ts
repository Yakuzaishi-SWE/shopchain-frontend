import useAddress from "./useAddress";
import useLoadingWrap from "./useLoadingWrap";
import useSinglePayment from "./useSinglePayment";

const useCreate = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
    const { startLoading, loaded, error, setResult, setError } = useLoadingWrap<void>({ onResult: onSuccess });
    const contract = useSinglePayment();
    const from = useAddress();

    const create = ({ seller, amount, id }: { seller: string, amount: string, id: string }) => {
        if (contract) {
            startLoading();
            contract.methods
                .newOrder(seller, amount, id)
                .send({ from, value: amount })
                .then(() => setResult())
                .catch((err) => {
                    if ((err as any).code && (err as any).code === -32602) {
                        contract.methods
                            .newOrder(seller, amount, id)
                            .send({ from, value: amount, type: "0x1" })
                            .then(() => setResult())
                            .catch((err) => setError(err));
                    } else {
                        setError(err as string);
                    }
                });
        }
    };

    return { create, loaded, error };
};


export default useCreate;