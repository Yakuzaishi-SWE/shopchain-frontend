import Order from "core/modules/order/domain/Order";
import ProviderStore from "core/provider/store/ProviderStore";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";
import Amount from "../../../../core/modules/order/domain/Amount";
import ECommerceViewModel from "./ECommerceViewModel";

jest.mock("mobx", () => {
    return {
        makeAutoObservable: jest.fn(),
    }
});

jest.mock("uuid", () => {
    return {
        v4: jest.fn(),
    }
});

// jest.mock("core/modules/order/domain/Amount", () => {
//     class Amount {
//         FTM = 123;
//         wei = 456;
//         setAmountFTM = jest.fn();
//     }
//     return Amount;
// });

const order = {
    sellerAddress: "0x123",
} as Order;

const NULLredirectLink = null;
const OKredirectLink = "mock/?amount=1000000000000000000";

const providerStore = {} as unknown as ProviderStore;

describe("ECommerceViewModel", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should create an instance", () => {
        (v4 as jest.MockedFunction<typeof v4>).mockReturnValue("mock");
        const vm = new ECommerceViewModel(providerStore);
        expect(makeAutoObservable).toBeCalledTimes(2);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
        expect(vm.redirectLink).toBe(NULLredirectLink);
    });

   it("should return amount", () => {
        const vm = new ECommerceViewModel(providerStore);
        expect(vm.amount).toBe(0);
    });

    it("should return wei", () => {
        const vm = new ECommerceViewModel(providerStore);
        expect(vm.wei).toBe(0);
    });

    it("should return id", () => {
        const vm = new ECommerceViewModel(providerStore);
        expect(vm.id).toBe("mock");
    });

    it("should call setAmount", () => {
        const vm = new ECommerceViewModel(providerStore);
        vm.setAmount(567);
        expect(vm.amount).toBe(567);
    });

    it("should call handleSubmit", () => {
        const vm = new ECommerceViewModel(providerStore);
        vm.setAmount(1);
        vm.handleSubmit();
        expect(vm.redirectLink).toBe(OKredirectLink);
    });
});