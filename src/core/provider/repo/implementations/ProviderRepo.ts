import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { makeAutoObservable } from "mobx";
import ProviderStore from "../../store/ProviderStore";
import IProviderRepo from "../IProviderRepo";



export default class ProviderRepo implements IProviderRepo {
    constructor(private readonly providerStore: ProviderStore) { 
        makeAutoObservable(this, {}, { autoBind: true });
    }

    /** Connette e ritorna gli account connessi */
    async connect(): Promise<string[]> {
        if (!this.providerStore.provider) throw new Error("Provider is not set");
        return await this.providerStore.provider.request({ method: "eth_requestAccounts" }) as string[];
    }

    async getProvider(): Promise<MetaMaskInpageProvider> {
        const p = await detectEthereumProvider();
        // if (p && p !== window.ethereum) throw new Error("Conflicting Multiple Wallet installed");
        return p as MetaMaskInpageProvider;
    }

    async getAccounts(): Promise<string[]> {
        if (!this.providerStore.provider) throw new Error("Provider is not set");
        return await this.providerStore.provider.request({ method: "eth_accounts" }) as string[];
    }

    async getChainId(): Promise<string> {
        if (!this.providerStore.provider) throw new Error("Provider is not set");
        return await this.providerStore.provider.request({ method: "eth_chainId" }) as string;
    }

    subscribeAddressChanged(callback: (address: unknown[]) => void) {
        if (!this.providerStore.provider) throw new Error("Provider is not set");
        this.providerStore.provider.addListener("accountsChanged", callback as any);
    }

    unsubscribeAddressChanged(callback: (address: unknown[]) => void) {
        if (!this.providerStore.provider) throw new Error("Provider is not set");
        this.providerStore.provider.removeListener("accountsChanged", callback);
    }

    subscribeChainChanged(_callback: (chain: unknown) => void) {
        if (!this.providerStore.provider) throw new Error("Provider is not set");
        this.providerStore.provider.addListener("chainChanged", () => window.location.reload());
    }

    unsubscribeChainChanged(callback: (chain: unknown) => void) {
        if (!this.providerStore.provider) throw new Error("Provider is not set");
        this.providerStore.provider.removeListener("chainChanged", callback);
    }
}