import Order from "../../../../core/modules/order/domain/Order";
import TransactionListElViewModel from "./TransactionListElViewModel";
import { makeAutoObservable } from "mobx";

jest.mock("mobx", () => {
    return {
        makeAutoObservable: jest.fn(),
    };
});

const paidOrder = {
    id: "1",
    state: {
        isPaid: true,
        isClosed: false,
        isCancelled: false,
    },
    type: "PAID",
} as unknown as Order;

const unlockedOrder = {
    id: "2",
    state: {
        isPaid: false,
        isClosed: true,
        isCancelled: false,
    },
    type: "UNLOCKED",
} as unknown as Order;

const refundedOrder = {
    id: "3",
    state: {
        isPaid: false,
        isClosed: false,
        isCancelled: true,
    },
    type: "REFUNDED",
} as unknown as Order;

describe("TransactionListElViewModel", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should create an instance", () => {
        const vm = new TransactionListElViewModel(paidOrder);
        expect(makeAutoObservable).toBeCalledTimes(1);
        expect(makeAutoObservable).toBeCalledWith(vm, {}, { autoBind: true });
    });

    it("should return the order id", () => {
        const vm = new TransactionListElViewModel(paidOrder);
        expect(vm.id).toBe("1");
    });

    it("should return the correct order type", () => {
        const vm1 = new TransactionListElViewModel(paidOrder);
        expect(vm1.orderType).toBe("paid");
        const vm2 = new TransactionListElViewModel(unlockedOrder);
        expect(vm2.orderType).toBe("unlocked");
        const vm3 = new TransactionListElViewModel(refundedOrder);
        expect(vm3.orderType).toBe("refunded");
    });

    it("should return the correct order status", () => {
        const vm1 = new TransactionListElViewModel(paidOrder);
        expect(vm1.isPaid).toBe(true);
        expect(vm1.isUnlocked).toBe(false);
        expect(vm1.isRefunded).toBe(false);

        const vm2 = new TransactionListElViewModel(unlockedOrder);
        expect(vm2.isUnlocked).toBe(true);
        expect(vm2.isPaid).toBe(false);
        expect(vm2.isRefunded).toBe(false);

        const vm3 = new TransactionListElViewModel(refundedOrder);
        expect(vm3.isRefunded).toBe(true);
        expect(vm3.isPaid).toBe(false);
        expect(vm3.isUnlocked).toBe(false);
    });

    it("should return the order", () => {
        const vm = new TransactionListElViewModel(paidOrder);
        expect(vm.transaction).toBe(paidOrder);
    });
});
