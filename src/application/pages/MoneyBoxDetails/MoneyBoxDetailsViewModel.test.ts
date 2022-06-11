import ProviderStore from "../../../core/provider/store/ProviderStore";
import RootStore from "../../../core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import MoneyBoxDetailsViewModel from "./MoneyBoxDetailsViewModel";
import Amount from "core/modules/order/domain/Amount";
import OrderState from "core/modules/order/domain/OrderState";
import { OrderStateEnum } from "types/enums";
import Payment from "core/modules/order/domain/Payment";

// jest.mock("mobx-utils", () => {
//     return {
//         computedFn: jest.fn((fn) => fn),
//     };
// });

// jest.mock("mobx", () => {
//     return {
//         makeAutoObservable: jest.fn(),
//         makeObservable: jest.fn(),
//         observable: { ref: 1 },
//         computed: 1,
//         action: 1,
//         autorun: jest.fn(),
//         reaction: jest.fn(),
//     };
// });

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

    it("should create an instance", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        // expect(makeAutoObservable).toBeCalledTimes(2);
        // expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
    });

    it("should set the id", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.id).toBe("");
        vm.setOrderId("id");
        expect(vm.id).toBe("id");
    });

    it("should get ownerAddress", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.ownerAddress).toBe("0x0");
    });

    it("should get sellerAddress", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.sellerAddress).toBe("0x0");
    });

    it("should get ftm", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.usdt).toBe(10 ** -13);
    });

    it("should get filledFtm", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.filledUsdt).toBe(5 * 10 ** -14);
    });

    it("should get ftmToFill", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.usdtToFill).toBe(5 * 10 ** -14);
    });

    it("should get state", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.state).toBe("Created");
    });

    it("should get isPaid", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.isPaid).toBe(false);
    })

    it("should get isRefunded", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.isRefunded).toBe(false);
    });

    it("should get isUnlocked", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.isUnlocked).toBe(false);
    });

    it("should get feeAmountFtm", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.feeAmountFtm).toBe(0);
        vm.setFeeAmount(123);
        expect(vm.feeAmountFtm).toBe(123);
    });

    it("should get unlockCode", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.unlockCode).toBe(0);
    });

    it("should get code", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.code).toBe(0);
        vm.setCode(1234);
        expect(vm.code).toBe(1234);
    });

    it("should get partecipants", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.partecipants).toEqual([
            {
                amount: new Amount(123),
                from: "0x0",
            }
        ]);

        const vm2 = new MoneyBoxDetailsViewModel(rootStore, FAILproviderStore);
        expect(vm2.partecipants).toEqual([]);
    });

    it("should get isOwner", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.isOwner).toBe(true);
    })

    it("should get isSeller", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.isSeller).toBe(true);
    });

    it("should get date", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.date).toBe("1/1/1970 3:25:45");
    })

    it("should get is busy", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.isBusy).toBe(false);
    })

    it("should get canReload", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.canReload).toBe(false);
    })

    it("unlock",() =>  {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.unlock()).toBe(false);

        const v2 = new MoneyBoxDetailsViewModel(rootStore, FAILproviderStore);
        expect(v2.unlock()).toBe(true);
    })

    it("refund", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.refund()).toBe(false);

        const v2 = new MoneyBoxDetailsViewModel(rootStore, FAILproviderStore);
        expect(v2.refund()).toBe(true);
    })

    it("dateNtime", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.dateNtime({  timestamp: 1000 } as Payment)).toBe("1/1/1970 0:16:40");
    })

    it("newPayment",() => {
        const vm1 = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        vm1.setFeeAmount(100 * 10 ** -18);
        expect(vm1.newPayment()).toBe(false);

        const vm2 = new MoneyBoxDetailsViewModel(rootStore, FAILproviderStore);
        expect(vm2.newPayment()).toBe(true);
    })

});