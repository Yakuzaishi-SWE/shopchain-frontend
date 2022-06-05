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
        createOrder: jest.fn(),
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
});