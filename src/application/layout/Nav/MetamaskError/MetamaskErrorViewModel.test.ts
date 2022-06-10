import ProviderStore from "../../../../core/provider/store/ProviderStore";
import MetamaskErrorViewModel from "./MetamaskErrorViewModel";


const providerStore = {
    state: {
        severity: 1,
        name: 1,
        description: "mock",
    },
} as unknown as ProviderStore

describe("MetamaskErrorViewModel", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should return severity", () => {
        const vm = new MetamaskErrorViewModel(providerStore);
        expect(vm.severity).toBe(providerStore.state.severity);
    });

    it("should return name", () => {
        const vm = new MetamaskErrorViewModel(providerStore);
        expect(vm.name).toBe(providerStore.state.name);
    });

    it("should return description", () => {
        const vm = new MetamaskErrorViewModel(providerStore);
        expect(vm.description).toBe(providerStore.state.description);
    });
});