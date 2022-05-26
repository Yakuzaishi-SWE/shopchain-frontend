import { makeAutoObservable } from "mobx";
import ProviderStore from "../../../../core/provider/store/ProviderStore";
import ConnectMetamaskViewModel from "./ConnectMetamaskViewModel";

const providerStore = {
    connect: jest.fn(),
} as unknown as ProviderStore

jest.mock("mobx", () => {
    return {
        makeAutoObservable: jest.fn(),
    }
});

describe("ConnectMetaMaskViewModel", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    }
);

    it("should call makeAutoObservable at creation", () => {
        const vm = new ConnectMetamaskViewModel(providerStore);
        expect(makeAutoObservable).toBeCalledTimes(1);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
    });

    it("should call connect", () => {
        const vm = new ConnectMetamaskViewModel(providerStore);
        vm.connect();
        expect(providerStore.connect).toBeCalledTimes(1);
    });
});