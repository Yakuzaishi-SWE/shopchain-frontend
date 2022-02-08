import { AppContext, IAppContext } from "./AppContext"
import React, { useEffect, useMemo, useState } from "react"
import { MetaMaskInpageProvider } from "@metamask/providers";
import detectEthereumProvider from "@metamask/detect-provider";

const AppProvider = ({ children }: { children: React.ReactChild }) => {
    const [currentAccount, setAccount] = useState<string | null>(null);
    const [currentChain, setChain] = useState<string | null>(null);
    const [connected, setConnected] = useState<boolean>(false);
    const [ethereum, setProvider] = useState<MetaMaskInpageProvider | null>(null);


    function handleAccountsChanged(...accounts: unknown[]) {
        if (accounts.length === 0) {
            console.log('Please connect to MetaMask.');
        } else if (accounts[0] !== currentAccount) {
            setAccount((accounts[0] as string[])[0]);
        }
    }

    function handleChainChanged(_chainId) {
        window.location.reload();
    }


    useEffect(() => {
        detectEthereumProvider()
            .then((p) => {
                if (!p) console.error("Install Metamask");
                if (p !== window.ethereum) console.error("Conflicting Multiple Wallet installed");
                setProvider(p as MetaMaskInpageProvider | null);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (ethereum) {
            ethereum
                .request({ method: 'eth_accounts' })
                .then(handleAccountsChanged)
                .catch((err) => {
                    console.error(err);
                });
            ethereum.request({ method: 'eth_chainId' })
                .then(c => setChain(c as string))
                .catch((err) => {
                    console.error(err);
                });

            ethereum.on('accountsChanged', handleAccountsChanged);
            ethereum.on('chainChanged', handleChainChanged);

            return () => ethereum.removeAllListeners();
        } else return () => { };
    }, [ethereum]);

    function connect() {
        if (ethereum)
            ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(handleAccountsChanged)
                .catch((err) => {
                    if (err.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // If this happens, the user rejected the connection request.
                        console.log('Please connect to MetaMask.');
                    } else {
                        console.error(err);
                    }
                });
    }

    const info = useMemo<IAppContext["info"]>(() => ({ connected, address: currentAccount, chain: currentChain }), [connected, currentAccount, currentChain]);

    const ctx = useMemo<IAppContext>(() => ({ info, provider: ethereum, connect }), [info, ethereum, connect]);

    return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>
}

export default AppProvider;