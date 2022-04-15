import IProviderRepo from "core/provider/repo/IProviderRepo";
import ProviderStore from "../ProviderStore";

const providerRepo: IProviderRepo = {
    connect: jest.fn(async () => ["0xfa2", "0xfa3"]),
    getProvider: jest.fn(),
    getAccounts: jest.fn(async () => ["0xfa2", "0xfa3"]),
    getChainId: jest.fn(async () => "0x1"),
    subscribeAddressChanged: jest.fn(),
    unsubscribeAddressChanged: jest.fn(),
    subscribeChainChanged: jest.fn(),
    unsubscribeChainChanged: jest.fn(),
}

const provider: MetaMaskInpageProvider = { superprovider: "420" } as any;


describe("ProviderStore", () => {

    it("creates an providerStore", () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore).toBeInstanceOf(ProviderStore);
        expect(providerStore.provider).toBe(null);
        expect(providerStore.address).toBeDefined();
        expect(providerStore.chain).toBeDefined();
        expect(providerStore.w3).toBeDefined();
    });


    it("sets the provider", () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        providerStore.setProvider(provider);
        expect(providerStore.provider).toStrictEqual(provider); 
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

    it("unsubscribes to address changes", () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        const callback = jest.fn();
        providerStore.unsubscribeAddressChanged(callback);
        expect(providerRepo.unsubscribeAddressChanged).toHaveBeenCalledWith(callback);
    });

    it("subscribes to chain changes", () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        const callback = jest.fn();
        providerStore.subscribeChainChanged(callback);
        expect(providerRepo.subscribeChainChanged).toHaveBeenCalledWith(callback);
    });

    it("unsubscribes to chain changes", () => {
        const providerStore = new ProviderStore(providerRepo);
        expect(providerStore.provider).toBe(null);
        const callback = jest.fn();
        providerStore.unsubscribeChainChanged(callback);
        expect(providerRepo.unsubscribeChainChanged).toHaveBeenCalledWith(callback);
    });
})