import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";
import React, { useEffect, useMemo, useState } from "react";
import { MetamaskErrorName, MetamaskErrorSeverity } from "types/enums";
import Web3 from "web3";
import { AppContext, IAppContext } from "./AppContext";
import SP from "./SP.json";

const MissingMetamask: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.METAMASK_NOT_INSTALLED,
    description: "please install metamask",
};

const NotConnected: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.NOT_CONNECTED,
    description: "Connect Metamask",
};

const Nominal: MetamaskError = {
    severity: MetamaskErrorSeverity.OK,
    name: MetamaskErrorName.OK,
    description: "Everything is nominal"
};

const AppProvider = ({ children }: { children: React.ReactChild }) => {
    const [currentAccount, setAccount] = useState<string | null>(null);
    const [currentChain, setChain] = useState<string | null>(null);
    const [ethereum, setProvider] = useState<MetaMaskInpageProvider | null>(null);
    const [provider_error, setProviderError] = useState<MetamaskError>(Nominal);

    const w3 = useMemo(() => {
        if (ethereum) return new Web3(ethereum as any);
        return null;
    }, [ethereum]);

    const contract = useMemo(() => {
        if (w3) return new w3.eth.Contract(SP as any, "0x21461fFe79adb0606456c6214B5569Ba0f40f4B3");
        else return null;
    }, [w3]);

    useEffect(() => {
        if (!currentAccount && provider_error.name !== MetamaskErrorName.OK) setProviderError(NotConnected);
        if (currentAccount && provider_error.name === MetamaskErrorName.NOT_CONNECTED) setProviderError(Nominal);
    }, [currentAccount, provider_error]);

    function handleAccountsChanged(...accounts: unknown[]) {
        if (accounts.length === 0) {
            console.log("Please connect to MetaMask.");
        } else if (accounts[0] !== currentAccount) {
            setAccount((accounts[0] as string[])[0]);
        }
    }

    function handleChainChanged() {
        window.location.reload();
    }

    useEffect(() => {
        detectEthereumProvider()
            .then((p) => {
                if (!p) setProviderError(MissingMetamask);
                else if (p !== window.ethereum) console.error("Conflicting Multiple Wallet installed");
                else setProvider(p as MetaMaskInpageProvider | null);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (ethereum) {
            ethereum
                .request({ method: "eth_accounts" })
                .then(handleAccountsChanged)
                .catch((err) => {
                    console.error(err);
                });
            ethereum.request({ method: "eth_chainId" })
                .then(c => setChain(c as string))
                .catch((err) => {
                    console.error(err);
                });

            ethereum.on("accountsChanged", handleAccountsChanged);
            ethereum.on("chainChanged", handleChainChanged);

            return () => ethereum.removeAllListeners();
        } return () => { return; };
    }, [ethereum]);

    function connect() {
        if (ethereum)
            ethereum
                .request({ method: "eth_requestAccounts" })
                .then(handleAccountsChanged)
                .catch((err) => {
                    if (err.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // If this happens, the user rejected the connection request.
                        console.log("Please connect to MetaMask.");
                    } else {
                        console.error(err);
                    }
                });
    }

    const info = useMemo<IAppContext["info"]>(() => ({ address: currentAccount, chain: currentChain }), [currentAccount, currentChain]);

    const ctx = useMemo<IAppContext>(() => ({ info, contract, provider_error, connect }), [info, contract, provider_error, connect]);

    return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

export default AppProvider;