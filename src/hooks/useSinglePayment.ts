import { useMemo } from "react";
import Web3 from "web3";
import useAddress from "./useAddress";
import useMetamask from "./useMetamask";
import SP from './SP.json';


const useSinglePayment = () => {
    const [provider] = useMetamask();

    const w3 = useMemo(() => {
        if (provider) return new Web3(provider as any);
        return null;
    }, [provider]);

    const contract = useMemo(() => {
        if (w3) return new w3.eth.Contract(SP as any, "0xD5D4f2Dd47B41f4eACBF04cC4769194ef713AAB2");
        else return null;
    }, [w3]);

    return contract;
}

export default useSinglePayment;