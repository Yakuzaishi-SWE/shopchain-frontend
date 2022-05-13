import detectEthereumProvider from "@metamask/detect-provider";
import ProviderStore from "../../../store/ProviderStore";
import ProviderRepo from "../ProviderRepo";

const provider = { fakeProvider: true };

jest.mock("@metamask/detect-provider", () => {
    return jest.fn(() => provider);
});


const providerStore: ProviderStore = {
    provider: {
        request: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn()
    }
} as any;



describe("ProviderRepo", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("Creates ", () => {
        const repo = new ProviderRepo(providerStore);
        expect(repo).toBeTruthy();
        expect(repo).toBeInstanceOf(ProviderRepo);
    });

    test("connect the provider", async () => {
        const repo = new ProviderRepo(providerStore);
        await repo.connect();
        expect(providerStore.provider?.request).toHaveBeenCalledWith({ method: "eth_requestAccounts" });
    });

    test("getProvider", async () => {
        const repo = new ProviderRepo(providerStore);
        const p = await repo.getProvider();
        expect(p).toBe(provider);
        expect(detectEthereumProvider).toHaveBeenCalledTimes(1);
    });

    test("getAccounts", async () => {
        const repo = new ProviderRepo(providerStore);
        await repo.getAccounts();
        expect(providerStore.provider?.request).toHaveBeenCalledWith({ method: "eth_accounts" });
    });

    test("getChainId", async () => {
        const repo = new ProviderRepo(providerStore);
        await repo.getChainId();
        expect(providerStore.provider?.request).toHaveBeenCalledWith({ method: "eth_chainId" });
    });

    test("subscribeAddressChanged", async () => {
        const repo = new ProviderRepo(providerStore);
        function callback(){ };
        repo.subscribeAddressChanged(callback);
        expect(providerStore.provider?.addListener).toHaveBeenCalled();
    });

    test("unsubscribeAddressChanged", () => {
        const repo = new ProviderRepo(providerStore);
        function callback(){ };
        repo.unsubscribeAddressChanged(callback);
        expect(providerStore.provider?.removeListener).toHaveBeenCalledWith("accountsChanged", callback);
    });

    test("subscribeChainChanged", () => {
        const repo = new ProviderRepo(providerStore);
        function callback() { };
        repo.subscribeChainChanged(() => {});
        expect(providerStore.provider?.addListener).toHaveBeenCalled();
    });

    test("unsubscribeChainChanged", () => {
        const repo = new ProviderRepo(providerStore);
        function callback(){ };
        repo.unsubscribeChainChanged(callback);
        expect(providerStore.provider?.removeListener).toHaveBeenCalledWith("chainChanged", callback);
    });

    describe("provider not set", () => {
        const providerStoreUndef: ProviderStore = {
            provider: null
        } as any;

        test("connect", async () => {
            const repo = new ProviderRepo(providerStoreUndef);
            try {
                await repo.connect();
            } catch (e) {
                expect(e).toBeTruthy();
                expect(e).toStrictEqual(new Error("Provider is not set"));
            }
        })

        test("getAccounts", async () => {
            const repo = new ProviderRepo(providerStoreUndef);
            try {
                await repo.getAccounts()
            } catch (e) {
                expect(e).toBeTruthy();
                expect(e).toStrictEqual(new Error("Provider is not set"));
            }
        });

        test("getChainId", async () => {
            const repo = new ProviderRepo(providerStoreUndef);
            try {
                await repo.getChainId()
            } catch (e) {
                expect(e).toBeTruthy();
                expect(e).toStrictEqual(new Error("Provider is not set"));
            }
        });

        test("subscribeAddressChanged", () => {
            const repo = new ProviderRepo(providerStoreUndef);
            try {
                repo.subscribeAddressChanged(() => { });
            } catch (e) {
                expect(e).toBeTruthy();
                expect(e).toStrictEqual(new Error("Provider is not set"));
            }
        });

        test("unsubscribeAddressChanged", () => {
            const repo = new ProviderRepo(providerStoreUndef);
            try {
                repo.unsubscribeAddressChanged(() => { });
            } catch (e) {
                expect(e).toBeTruthy();
                expect(e).toStrictEqual(new Error("Provider is not set"));
            }
        });

        test("subscribeChainChanged", () => {
            const repo = new ProviderRepo(providerStoreUndef);
            try {
                repo.subscribeChainChanged(() => { });
            } catch (e) {
                expect(e).toBeTruthy();
                expect(e).toStrictEqual(new Error("Provider is not set"));
            }
        });

        test("unsubscribeChainChanged", () => {
            const repo = new ProviderRepo(providerStoreUndef);
            try {
                repo.unsubscribeChainChanged(() => { });
            } catch (e) {
                expect(e).toBeTruthy();
                expect(e).toStrictEqual(new Error("Provider is not set"));
            }
        });

    });
})