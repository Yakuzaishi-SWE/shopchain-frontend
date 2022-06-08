import { makeAutoObservable } from "mobx";
import Amount from "core/modules/order/domain/Amount";
import OrderState from "core/modules/order/domain/OrderState";
import { OrderStateEnum } from "types/enums";

import MoneyBoxCountViewModel from "./MoneyBoxCountViewModel";
import RootStore from "core/shared/RootStore";
import ProviderStore from "core/provider/store/ProviderStore";

jest.mock("mobx", () => {
    return {
        makeAutoObservable: jest.fn(),
        makeObservable: jest.fn(),
        observable: { ref: 1 },
        computed: 1,
        action: 1,
        autorun: jest.fn(),
        reaction: jest.fn(),
    };
});

const moneyBoxTask = {
    result: {
        amountToFill: {
            result: new Amount(50000),
        },
        payments: {
            result: [
                {
                    from: "0x0",
                    amount: new Amount(123)
                }
            ],
        },
        timestamp: 12345,
        amount: new Amount(100000),
        ownerAddress: "0x0",
        sellerAddress: "0x0",
        state: new OrderState(OrderStateEnum.CREATED),
        unlock: jest.fn(),
        refund: jest.fn(),
    }
}

const rootStore = {
    moneyBoxStore: {
        newPayment: jest.fn(),
        getOrderById: jest.fn(() => moneyBoxTask),
    },
} as unknown as RootStore;

const OKproviderStore = {
    provider: 1,
    address: {
        address: "0x0",
    }
} as unknown as ProviderStore;

const FAILproviderStore = {
    provider: null,
} as unknown as ProviderStore;

describe("MoneyBoxDetailsViewModel", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("creates vm", () =>  {
        const vm = new MoneyBoxCountViewModel(rootStore);
        expect(vm).toBeDefined();
    })

    it("isBusy", () => {
        const vm = new MoneyBoxCountViewModel(rootStore);
        expect(vm.isBusy).toBe(false);
    })

    it("count", () => {
        const vm = new MoneyBoxCountViewModel(rootStore);
        expect(vm.count).toBe(0);
    });
});