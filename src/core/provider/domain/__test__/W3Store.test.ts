import IProviderRepo from "core/provider/repo/IProviderRepo";
import ProviderStore from "core/provider/store/ProviderStore";
import { makeObservable, observable, runInAction, when } from "mobx";
import W3Store from "../W3Store";
import Web3 from "web3";

jest.mock("web3");

const providerStore: ProviderStore = {
    provider: 1,
} as any;


makeObservable(providerStore, { provider: observable });

const providerStoreNull: ProviderStore = {
    provider: null,
} as any;

makeObservable(providerStoreNull, { provider: observable });

beforeEach(() => {
    jest.clearAllMocks();
})

describe("W3Store", () => {

    it("creates an w3Store", () => {
        const w3Store = new W3Store(providerStoreNull);
        expect(w3Store).toBeInstanceOf(W3Store);
        expect(w3Store.web3).toBe(null);
        expect(w3Store.om).toBeDefined();
        expect(w3Store.mm).toBeDefined();
        expect(Web3).toHaveBeenCalledTimes(0);
    });

    it("creates an w3Store and subscribe to provider change", async () => {
        const w3Store = new W3Store(providerStoreNull);
        expect(w3Store).toBeInstanceOf(W3Store);
        expect(w3Store.web3).toBe(null);
        expect(w3Store.om).toBeDefined();
        expect(w3Store.mm).toBeDefined();
        expect(Web3).toHaveBeenCalledTimes(0);
        runInAction(() => providerStoreNull.provider = 1 as any);
        await when(() => providerStoreNull.provider !== null);
        expect(Web3).toHaveBeenCalled();
        expect(w3Store.web3).not.toBe(null);
    });

});