import RootStore from "../../../../../core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import PickAmountViewModel from "./PickAmountViewModel";

jest.mock("mobx", () => {
    return {
        makeAutoObservable: jest.fn(),
    };
});

const rootStore = {
    moneyBoxStore: {
        createOrder: jest.fn(),
    },
} as unknown as RootStore;

describe("PickAmountViewModel", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should create an instance", () => {
        const vm = new PickAmountViewModel(rootStore);
        expect(makeAutoObservable).toBeCalledTimes(3);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
    });

    it("should call createMoneyBox", () => {
        const vm = new PickAmountViewModel(rootStore);
        vm.createMoneyBox();
        expect(rootStore.moneyBoxStore.createOrder).toBeCalledTimes(1); //? non so se ha senso sta roba
    });

    it("should call setAmount", () => {
        const vm = new PickAmountViewModel(rootStore);
        vm.setAmount("1000000000000000000");
        expect(vm.amountFtm).toBe(1);
    });

    it("should call setId", () => {
        const vm = new PickAmountViewModel(rootStore);
        vm.setId("1");
        expect(vm.id).toBe("1");
    });

    it("should call setInitFTM", () => {
        const vm = new PickAmountViewModel(rootStore);
        vm.setInitFTM(1);
        expect(vm.initFTM).toBe(1);
        expect(vm.initWei).toBe(1000000000000000000);
    });
});