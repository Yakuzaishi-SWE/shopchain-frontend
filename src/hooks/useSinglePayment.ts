import { AppContext } from "providers";
import { useContext } from "react";


const useSinglePayment = () => {
    const {contract} = useContext(AppContext);

    return contract;
}

export default useSinglePayment;