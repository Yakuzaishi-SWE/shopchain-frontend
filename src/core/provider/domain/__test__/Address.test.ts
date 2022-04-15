import ProviderStore from "core/provider/store/ProviderStore";
import { makeObservable, observable, runInAction, when } from "mobx";
import Address from "../Address";


const providerStore: ProviderStore = {
    provider: 1,
    subscribeAddressChanged: jest.fn(),
} as any;


makeObservable(providerStore, { provider: observable });

const providerStoreNull: ProviderStore = {
    provider: null,
    subscribeAddressChanged: jest.fn(),
} as any;

makeObservable(providerStoreNull, { provider: observable });


describe("Address", () =>  {

    it("creates an address", () => {
        const address = new Address(providerStore);
        expect(address).toBeInstanceOf(Address);
        expect(address.address).toBe(null);
        expect(providerStore.subscribeAddressChanged).toHaveBeenCalledTimes(1);
    });

    it("should create address", async () => {
        const chain = new Address(providerStoreNull);
        expect(chain).toBeInstanceOf(Address);
        expect(chain.address).toBeNull();
        expect(providerStoreNull.subscribeAddressChanged).toHaveBeenCalledTimes(0);
        runInAction(() => providerStoreNull.provider = 1 as any);
        await when(() => providerStoreNull.provider !== null);
        expect(providerStoreNull.subscribeAddressChanged).toHaveBeenCalledTimes(1);
    });

    it("should set address", () => {
        const address = new Address(providerStore);
        expect(address.isSet).toBeFalsy();
        address.setAddress("0xfa2");
        expect(address.isSet).toBeTruthy();
        expect(address.address).toBe("0xfa2");
    });
});