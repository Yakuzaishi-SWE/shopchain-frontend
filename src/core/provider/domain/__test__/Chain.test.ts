import ProviderStore from "core/provider/store/ProviderStore";
import { makeObservable, observable, runInAction, when } from "mobx";
import Chain from "../Chain";

const providerStore: ProviderStore = {
    provider: 1,
    subscribeChainChanged: jest.fn(),
} as any;


makeObservable(providerStore, { provider: observable });

const providerStoreNull: ProviderStore = {
    provider: null,
    subscribeChainChanged: jest.fn(),
} as any;

makeObservable(providerStoreNull, { provider: observable });


describe("Chain", () => {

    it("should create chain", () => {
        const chain = new Chain(providerStore);
        expect(chain).toBeInstanceOf(Chain);
        expect(chain.chainId).toBeNull();
        expect(providerStore.subscribeChainChanged).toHaveBeenCalledTimes(1);
    });

    it("should create chain", async () => {
        const chain = new Chain(providerStoreNull);
        expect(chain).toBeInstanceOf(Chain);
        expect(chain.chainId).toBeNull();
        expect(providerStoreNull.subscribeChainChanged).toHaveBeenCalledTimes(0);
        runInAction(() => providerStoreNull.provider = 1 as any);
        await when(() => providerStoreNull.provider !== null);
        expect(providerStoreNull.subscribeChainChanged).toHaveBeenCalledTimes(1);
    });


    it("should set chain id", () => {
        const chain = new Chain(providerStore);
        expect(chain.isSet).toBeFalsy();
        chain.setChainId("0xfa2");
        expect(chain.isSet).toBeTruthy();
        expect(chain.chainId).toBe("0xfa2");
        expect(chain.isFantomTestnet).toBe(true);
        expect(chain.isRopstenTestnet).toBe(false);
    });

    it("should set chain id", () => {
        const chain = new Chain(providerStore);
        chain.setChainId("0x3");
        expect(chain.chainId).toBe("0x3");
        expect(chain.isFantomTestnet).toBe(false);
        expect(chain.isRopstenTestnet).toBe(true);
    });
});