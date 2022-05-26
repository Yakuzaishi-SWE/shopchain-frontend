import ProviderStore from "../../../core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import NavViewModel from "./NavViewModel";
import Address from "../../../core/provider/domain/Address";

const OKproviderStore = {
    address: {
        address: "0x0",
    } as Address,
} as unknown as ProviderStore

const FAILproviderStore = {
    address: {
        address: null,
    } as Address,
} as unknown as ProviderStore

jest.mock("mobx", () => ({
    makeAutoObservable: jest.fn(),
}));

describe("NavViewModel", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should call makeAutoObservable at creation", () => {
        const vm = new NavViewModel(OKproviderStore);
        expect(makeAutoObservable).toBeCalledTimes(1);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
    });

    describe("should return the address", () => {
        it("OK", () => {
            const vm = new NavViewModel(OKproviderStore);
            expect(vm.address).toBe(OKproviderStore.address.address);
        });

        it("FAIL", () => {
            const vm = new NavViewModel(FAILproviderStore);
            expect(vm.address).toBe("");
        });
    });
});