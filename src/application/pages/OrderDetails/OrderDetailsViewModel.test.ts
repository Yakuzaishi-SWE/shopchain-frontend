import ProviderStore from "../../../core/provider/store/ProviderStore";
import RootStore from "../../../core/shared/RootStore";
import { makeAutoObservable } from "mobx";
import MoneyBoxDetailsViewModel from "./OrderDetailsViewModel";
import Amount from "core/modules/order/domain/Amount";
import OrderState from "core/modules/order/domain/OrderState";
import { OrderStateEnum } from "types/enums";
import Payment from "core/modules/order/domain/Payment";
import moment from "moment";

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
    orderStore: {
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
        expect(makeAutoObservable).toBeCalledTimes(1);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
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
        expect(vm.ftm).toBe(10 ** -13);
    });

    it("should get wei", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.wei).toBe(100000);
    });

    it("should get state", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.state).toBe("Created");
    });

    it("should get isPaid", () => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.isPaid).toBe(false);
    })

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

    it("back",() => {
        const vm = new MoneyBoxDetailsViewModel(rootStore, OKproviderStore);
        expect(vm.back("out")).toBe("/transaction/out");
        expect(vm.back("in")).toBe("/transaction/in");
        expect(vm.back("")).toBe("");
    })
});