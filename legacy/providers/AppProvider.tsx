import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";
import React, { useEffect, useMemo, useState } from "react";
import { MetamaskErrorName, MetamaskErrorSeverity } from "types/enums";
import Web3 from "web3";
import { AppContext, IAppContext } from "./AppContext";
import SP from "./SP.json";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import { provider } from "web3-core";

const MissingMetamask: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.METAMASK_NOT_INSTALLED,
    description: "please install metamask",
};

const NotConnected: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.NOT_CONNECTED,
    description: "Connect MetaMask",
};

const Nominal: MetamaskError = {
    severity: MetamaskErrorSeverity.OK,
    name: MetamaskErrorName.OK,
    description: "Everything is nominal"
};

const WrongChain: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.WRONG_CHAIN,
    description: "Connect to Fantom Test Net (0xfa2)"
};

const W3_Error: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.W3_ERROR,
    description: "Error in the web3 library",
};

const ContractError: MetamaskError = {
    severity: MetamaskErrorSeverity.BLOCKING,
    name: MetamaskErrorName.CONTRACT_NOT_LOADED,
    description: "Contract is not loaded",
};

const AppProvider = ({ children }: { children: React.ReactChild }) => {
    const [currentAccount, setAccount] = useState<string | null>(null);
    const [currentChain, setChain] = useState<string | null>(null);
    const [ethereum, setProvider] = useState<MetaMaskInpageProvider | null>(null);
    const [waiting, setWaiting] = useState<boolean>(false);

    const w3 = useMemo(() => {
        if (ethereum) return new Web3(ethereum as provider);
        return null;
    }, [ethereum]);

    const contract: Contract | null = useMemo(() => {
        if (w3) return new w3.eth.Contract(SP as unknown as AbiItem[], "0x21461fFe79adb0606456c6214B5569Ba0f40f4B3");
        else return null;
    }, [w3]);

    const provider_error: MetamaskError = useMemo(() => {
        if (!ethereum) return MissingMetamask;
        else if (!w3) return W3_Error;
        else if (!contract) return ContractError;
        else if (!currentAccount) return NotConnected;
        else if (!currentChain || currentChain !== "0xfa2") return WrongChain;
        return Nominal;
    }, [currentAccount, currentChain]);

    function handleAccountsChanged(...accounts: unknown[]) {
        if (accounts.length > 0 && accounts[0] !== currentAccount) {
            setAccount((accounts[0] as string[])[0]);
        }
    }

    useEffect(() => {
        detectEthereumProvider()
            .then((p) => {
                if (p && p !== window.ethereum) console.error("Conflicting Multiple Wallet installed");
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
            ethereum.on("chainChanged", () => window.location.reload());

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
                        console.log("Please connect MetaMask.");
                    } else {
                        console.error(err);
                    }
                });
    }

    const info = useMemo<IAppContext["info"]>(() => ({ address: currentAccount, chain: currentChain }), [currentAccount, currentChain]);

    const ctx = useMemo<IAppContext>(() => ({ info, waiting: { state: waiting, start: () => setWaiting(true), stop: () => setWaiting(false) }, contract, provider_error, connect }), [info, contract, provider_error, connect]);

    return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

export default AppProvider;