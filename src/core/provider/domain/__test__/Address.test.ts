import { makeObservable, observable, runInAction, when } from "mobx";
import ProviderStore from "../../store/ProviderStore";
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

    it("should create address", async () => {
        const chain = new Address(providerStoreNull);
        expect(chain).toBeInstanceOf(Address);
        expect(chain.address).toBeNull();
    });

    it("should set address", () => {
        const address = new Address(providerStore);
        expect(address.isSet).toBeFalsy();
        address.setAddress(["0xfa2"]);
        expect(address.isSet).toBeTruthy();
        expect(address.address).toBe("0xfa2");
    });
});