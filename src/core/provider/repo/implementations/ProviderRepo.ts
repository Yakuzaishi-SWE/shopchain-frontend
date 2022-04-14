import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { makeAutoObservable } from "mobx";
import ProviderStore from "../../store/ProviderStore";
import IProviderRepo from "../IProviderRepo";



export default class ProviderRepo implements IProviderRepo {
    constructor(private readonly providerStore: ProviderStore | null) { 
        makeAutoObservable(this);
    }

    private get provider() {
        return this.providerStore?.provider || null;
    }

    /** Connette e ritorna gli account connessi */
    async connect(): Promise<string[]> {
        if (!this.provider) throw new Error("Provider is not set");
        return await this.provider.request({ method: "eth_requestAccounts" }) as string[];
    }

    async getProvider(): Promise<MetaMaskInpageProvider> {
        const p = await detectEthereumProvider()
        if (p && p !== window.ethereum) throw new Error("Conflicting Multiple Wallet installed");
        return p as MetaMaskInpageProvider;
    }

    async getAccounts(): Promise<string[]> {
        if (!this.provider) throw new Error("Provider is not set");
        return await this.provider.request({ method: "eth_accounts" }) as string[];
    }

    async getChainId(): Promise<string> {
        if (!this.provider) throw new Error("Provider is not set");
        return await this.provider.request({ method: "eth_chainId" }) as string;
    }

    subscribeAddressChanged(callback: (...address: unknown[]) => void) {
        if (!this.provider) throw new Error("Provider is not set");
        this.provider.addListener("accountsChanged", callback);
    }

    unsubscribeAddressChanged(callback: (...address: unknown[]) => void) {
        if (!this.provider) throw new Error("Provider is not set");
        this.provider.removeListener("accountsChanged", callback);
    }

    subscribeChainChanged(callback: (chain: unknown) => void) {
        if (!this.provider) throw new Error("Provider is not set");
        this.provider.addListener("chainChanged", callback);
    }

    unsubscribeChainChanged(callback: (chain: unknown) => void) {
        if (!this.provider) throw new Error("Provider is not set");
        this.provider.removeListener("chainChanged", callback);
    }
}