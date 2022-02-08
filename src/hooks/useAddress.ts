import { AppContext } from "providers";
import { useContext } from "react";

const useAddress = (): string | null => {
    const { info: {address} } = useContext(AppContext);
    return address;
}

export default useAddress;
