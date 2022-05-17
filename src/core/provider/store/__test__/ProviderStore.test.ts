import { MetaMaskInpageProvider } from "@metamask/providers";
import IProviderRepo from "../../repo/IProviderRepo";
import ProviderStore from "../ProviderStore";


const provider: MetaMaskInpageProvider = { superprovider: "420" } as any;

const providerRepo: IProviderRepo = {
    connect: jest.fn(async () => ["0xfa2", "0xfa3"]),
    getProvider: jest.fn(async () => provider),
    getAccounts: jest.fn(async () => ["0xfa2", "0xfa3"]),
    getChainId: jest.fn(async () => "0x1"),
    subscribeAddressChanged: jest.fn(),
    unsubscribeAddressChanged: jest.fn(),
    subscribeChainChanged: jest.fn(),
    unsubscribeChainChanged: jest.fn(),
}

describe("ProviderStore", () => {

    it("creates an providerStore", () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore).toBeInstanceOf(ProviderStore);
        expect(providerStore.provider).toBe(null);
        expect(providerStore.address).toBeDefined();
        expect(providerStore.chain).toBeDefined();
        expect(providerStore.w3).toBeDefined();
    });

    it("connects to the provider", async () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        await providerStore.connect();
        expect(providerRepo.connect).toHaveBeenCalled();
    });

    it("gets the provider", async () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        await providerStore.getProvider();
        expect(providerRepo.getProvider).toHaveBeenCalled();
    });

    it("gets the accounts", async () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        await providerStore.getAccounts();
        expect(providerRepo.getAccounts).toHaveBeenCalled();
    });

    it("gets the chainId", async () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        await providerStore.getChainId();
        expect(providerRepo.getChainId).toHaveBeenCalled();
    });

    it("subscribes to address changes", () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        const callback = jest.fn();
        providerStore.subscribeAddressChanged(callback);
        expect(providerRepo.subscribeAddressChanged).toHaveBeenCalledWith(callback);
    });

    it("subscribes to chain changes", () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        const callback = jest.fn();
        providerStore.subscribeChainChanged(callback);
        expect(providerRepo.subscribeChainChanged).toHaveBeenCalledWith(callback);
    });
})