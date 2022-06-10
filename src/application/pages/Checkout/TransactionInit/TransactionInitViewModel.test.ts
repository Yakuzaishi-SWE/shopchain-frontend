import ProviderStore from "../../../../core/provider/store/ProviderStore";
import RootStore from "../../../../core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import TransactionInitViewModel from "./TransactionInitViewModel";

jest.mock("mobx", () => {
    return {
        makeAutoObservable: jest.fn(),
    };
});

const rootStore = {
    orderStore: {
        createOrder: jest.fn(),
    },
    moneyBoxStore: {
        createOrder: jest.fn(),
    },
} as unknown as RootStore;

const providerStore = {} as unknown as ProviderStore;

describe("TransactionInitViewModel", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should create an instance", () => {
        const vm = new TransactionInitViewModel(providerStore, rootStore);
        expect(makeAutoObservable).toBeCalledTimes(2);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
    });

    it("should call createOrder", () => {
        const vm = new TransactionInitViewModel(providerStore, rootStore);
        vm.createOrder();
        expect(rootStore.orderStore.createOrder).toBeCalledTimes(1); //? non so se ha senso sta roba
    });

    it("should call createMoneyBox", () => {
        const vm = new TransactionInitViewModel(providerStore, rootStore);
        vm.createMoneyBox();
        expect(rootStore.moneyBoxStore.createOrder).toBeCalledTimes(1); //? non so se ha senso sta roba
    });

    it("should call setAmount", () => {
        const vm = new TransactionInitViewModel(providerStore, rootStore);
        vm.setAmount("1000000000000000000");
        expect(vm.ftm).toBe(1);
        expect(vm.wei).toBe(1000000000000000000);
    });

    it("should call setId", () => {
        const vm = new TransactionInitViewModel(providerStore, rootStore);
        vm.setId("0x0");
        expect(vm.id).toBe("0x0");
    });

    it("should return the seller address", () => {
        const vm = new TransactionInitViewModel(providerStore, rootStore);
        expect(vm.sellerAddress).toBe("0x7B44Fba1DB530C59DB6bbBF1FF886d4e49C07aE7");
    });
});