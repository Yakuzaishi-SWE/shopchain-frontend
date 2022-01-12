import { ConnectMetamaskView } from "views"
import React from "react";

type MetaMaskInpageProvider = import("@metamask/providers").MetaMaskInpageProvider;

declare global {
    interface Window {
        ethereum: MetaMaskInpageProvider;
    }
}

const ConnectMetamaskController = ({setAccount}:{setAccount:(account:string) => void}) => {
    const req = async () => {
        if (window.ethereum) {
            console.log('MetaMask is installed!');
        }
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts && (accounts as Array<string>).length!==0) {
            setAccount(accounts[0]);
        }
    };

    return <ConnectMetamaskView onClick={req} />
}

export default ConnectMetamaskController;