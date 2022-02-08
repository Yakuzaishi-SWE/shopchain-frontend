import { AppContext } from "providers";
import { useContext } from "react";


const useMetamask = (): [MetaMaskInpageProvider | null, () => void] => {
    const { provider, connect } = useContext(AppContext);

    return [provider, connect];
}

export default useMetamask;