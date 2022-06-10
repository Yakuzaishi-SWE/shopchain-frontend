import ProviderStore from "../../../../../core/provider/store/ProviderStore";
import RootStore from "../../../../../core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import ChoiceViewModel from "./ChoiceViewModel";

jest.mock("mobx", () => {
    return {
        makeAutoObservable: jest.fn(),
    };
});

const rootStore = {
    orderStore: {
        createOrder: jest.fn(() => ({
            result : {

            },
            isBusy: false,
            isFailed: false,
        })),
    },
} as unknown as RootStore;

const providerStore = {} as unknown as ProviderStore;

describe("ChoiceViewModel", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should create an instance", () => {
        const vm = new ChoiceViewModel(providerStore, rootStore);
        expect(makeAutoObservable).toBeCalledTimes(2);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
    });

    it("should call createOrder", () => {
        const vm = new ChoiceViewModel(providerStore, rootStore);
        vm.createOrder();
        expect(rootStore.orderStore.createOrder).toBeCalledTimes(1); //? non so se ha senso sta roba
    });

    it("should return canRedirect", () => {
        const vm = new ChoiceViewModel(providerStore, rootStore);
        vm.createOrder();
        expect(vm.canRedirect).toBe(false);
    });

    it("should return isBusy", () => {
        const vm = new ChoiceViewModel(providerStore, rootStore);
        vm.createOrder();
        expect(vm.isBusy).toBe(false);
    });

    it("should return isFailed", () => {
        const vm = new ChoiceViewModel(providerStore, rootStore);
        vm.createOrder();
        expect(vm.isFailed).toBe(false);
    });

    it("setAmount",() => {
        const vm = new ChoiceViewModel(providerStore, rootStore);
        vm.setAmount("1");
    })

    it("setId",() => {
        const vm = new ChoiceViewModel(providerStore, rootStore);
        vm.setId("1");
    });
});