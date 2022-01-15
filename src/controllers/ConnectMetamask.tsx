import { ConnectMetamaskView } from "views"
import React from "react";
import useAddress from "hooks/useAddress";
import Web3 from 'web3';

type MetaMaskInpageProvider = import("@metamask/providers").MetaMaskInpageProvider;

declare global {
    interface Window {
        ethereum: MetaMaskInpageProvider;
        web3: any;
    }
}

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum as any)
        await window.ethereum.enable()
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
    } else {
        window.alert('Non-ethereum browser detected. You should consider trying Metamask!')
    }
}

const ConnectMetamaskController = () => {
    const [_addr, setAddress] = useAddress();

    const req = async () => {
        if (window.ethereum) {
            console.log('MetaMask is installed!');
        }
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts && (accounts as Array<string>).length !== 0) {
            setAddress(accounts[0]);
        }
    };

    return <ConnectMetamaskView onClick={req} />
}

export default ConnectMetamaskController;