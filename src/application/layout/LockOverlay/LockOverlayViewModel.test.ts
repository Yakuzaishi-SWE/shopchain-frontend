import { makeAutoObservable } from "mobx";
import ProviderStore from "../../../core/provider/store/ProviderStore";
import LockOverlayViewModel from "./LockOverlayViewModel";

jest.mock("mobx", () => {
    return {
        makeAutoObservable: jest.fn(),
    }
});

const FAILProviderStore = {
    state: {
        isOK: false,
    }
} as ProviderStore

const OKProviderStore = {
    state: {
        isOK: true,
    }
} as ProviderStore


describe("LockOverlayViewModel", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("creates LockOverlayViewModel", () => {
        const vm = new LockOverlayViewModel(FAILProviderStore);

        expect(makeAutoObservable).toBeCalledTimes(1);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
    })

    describe("isConnected", () => {
        it("isConnected successful", () =>{
            const vm = new LockOverlayViewModel(OKProviderStore);

            expect(vm.isConnected).toBe(true);
        })

        it("isConnected successful", () =>{
            const vm = new LockOverlayViewModel(FAILProviderStore);

            expect(vm.isConnected).toBe(false);
        })

        it("isConnected successful", () =>{
            const vm = new LockOverlayViewModel(FAILProviderStore);

            expect(vm.isConnected).toBe(false);
        })
    });
})