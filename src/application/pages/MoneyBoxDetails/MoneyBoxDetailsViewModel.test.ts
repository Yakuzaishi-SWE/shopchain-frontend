import ProviderStore from "../../../core/provider/store/ProviderStore";
import RootStore from "../../../core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import MoneyBoxDetailsViewModel from "./MoneyBoxDetailsViewModel";

jest.mock("mobx", () => {
    return {
        makeAutoObservable: jest.fn(),
    };
});

const rootStore = {
    moneyBoxStore: {
        newPayment: jest.fn(),
        getOrderById: jest.fn(),
    },
} as unknown as RootStore;

const OKproviderStore = {
    provider: 1,
} as unknown as ProviderStore;

const FAILproviderStore = {
    provider: null,
} as unknown as ProviderStore;

describe("MoneyBoxDetailsViewModel", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should create an instance", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(makeAutoObservable).toBeCalledTimes(2);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
    });

    it("should set the id", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.id).toBe("");
        vm.setOrderId("id");
        expect(vm.id).toBe("id");
    });
});