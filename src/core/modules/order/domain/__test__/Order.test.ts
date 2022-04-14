import Amount from "../Amount"
import { OrderStateEnum } from "types/enums";
import OrderState from "../OrderState"
import OrderDTO from "../../dtos/OrderDTO"

import RootStore from "core/shared/RootStore";
import IOrderRepo from "../../repo/IOrderRepo";
import OrderStore from "../../store/OrderStore";
import Order from "../Order";
import { create } from "domain";

const id1 = "550e8400-e29b-41d4-a716-446655440000";
const id2 = "770e8400-e29b-41d4-a716-446655440000";

// Order store things
const rootStore: RootStore = {
} as RootStore;

const order:  OrderDTO = {
    sellerAddress: "0x0",
    ownerAddress: "0x0",
    amount: 10,
    unlockCode: 0,
    state: OrderStateEnum.CREATED,
}

const repo: IOrderRepo = {
    createOrder: jest.fn(async (data: any) => { return; }),
    getOrderById: jest.fn(async (id: string) => { return order; }),
    refund: jest.fn(async (id: string) => { return; }),
    unlock: jest.fn(async (id: string, code: number) => { return; }),
};

type OrderProps = {
    sellerAddress: string,
    ownerAddress: string,
    amount: Amount,
    unlockCode: number,
    state: OrderState
};

const orderProps : OrderProps = {
    sellerAddress: "0x0",
    ownerAddress: "0x0",
    amount: new Amount(1),
    unlockCode: 123,
    state: new OrderState("Created"),
}

const orderStore : OrderStore = {
    unlock: jest.fn(async (id: string, code: number) => { return; }),
    refund: jest.fn(async (id: string) => { return; }),
} as unknown as OrderStore

describe("Order", () => {

    it("test order constructor", () => {
        const order1 = new Order(orderStore, id1, orderProps);

        expect(order1).toBeTruthy;
        expect(order1).toBeInstanceOf(Order);
    })

    it("sellerAddress", () => {
        const order1 = new Order(orderStore, id1, orderProps);
        order1.sellerAddress = "0x5df80424c525af935c46b14E727564f1c4B21930";
        expect(order1.sellerAddress).toBe("0x5df80424c525af935c46b14E727564f1c4B21930");
    })

    it("create", () => {
        const order2 = Order.create(orderStore, id2, order);

        expect(order2).toBeTruthy;
        expect(order2).toBeInstanceOf(Order);
        expect(order2.sellerAddress).toBe("0x0");
    })

    it("amount", () => {
        const order1 = new Order(orderStore, id1, orderProps);
        expect(order1.amount).toBeTruthy;
        expect(order1.amount).toStrictEqual(new Amount(1))
    })

    it("unlock", async () => {
        const order1 = new Order(orderStore, id1, orderProps);

        const unlockCode = order1.unlockCode;
        await order1.unlock(unlockCode);
        expect(orderStore.unlock).toHaveBeenCalledTimes(1);
        expect(orderStore.unlock).toBeCalledWith(id1, orderProps.unlockCode);
    })

    it("refund", async () => {
        const order1 = new Order(orderStore, id1, orderProps);

        await order1.refund();
        expect(orderStore.refund).toHaveBeenCalledTimes(1);
        expect(orderStore.refund).toBeCalledWith(id1);
    })

})