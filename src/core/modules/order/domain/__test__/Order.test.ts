import { OrderStateEnum } from "../../../../../types/enums";
import RootStore from "../../../../shared/RootStore";
import OrderDTO from "../../dtos/OrderDTO";
import IOrderRepo from "../../repo/IOrderRepo";
import OrderStore from "../../store/OrderStore";
import Amount from "../Amount";
import Order from "../Order";
import OrderState from "../OrderState";


const id1 = "550e8400-e29b-41d4-a716-446655440000";
const id2 = "770e8400-e29b-41d4-a716-446655440000";

// Order store things
const rootStore: RootStore = {
    
} as RootStore;

const orderDTO:  OrderDTO = {
    sellerAddress: "0x0",
    ownerAddress: "0x0",
    amount: 10,
    unlockCode: 0,
    state: OrderStateEnum.CREATED,
    timestamp: 123,
}

const repo: IOrderRepo = {
    createOrder: jest.fn(),
    getOrderById: jest.fn(),
    getOrdersBySeller: jest.fn(),
    getOrdersByBuyer: jest.fn(),
    refund: jest.fn(async (id: string) => { return; }),
    unlock: jest.fn(async (id: string, code: number) => { return; }),
};

type OrderProps = {
    sellerAddress: string,
    ownerAddress: string,
    amount: Amount,
    unlockCode: number,
    state: OrderState,
    timestamp: number,
};

const orderProps : OrderProps = {
    sellerAddress: "0x0",
    ownerAddress: "0x0",
    amount: new Amount(1),
    unlockCode: 123,
    state: new OrderState("Created"),
    timestamp: 123,
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
        expect(order1.id).toBe(id1);
        expect(order1.sellerAddress).toBe(orderProps.sellerAddress);
        expect(order1.ownerAddress).toBe(orderProps.ownerAddress);
        expect(order1.amount).toBe(orderProps.amount);
        expect(order1.unlockCode).toBe(orderProps.unlockCode);
        expect(order1.state).toBe(orderProps.state);
    })


    it("create", () => {
        const order2 = Order.create(orderStore, id2, orderDTO);

        expect(order2).toBeTruthy;
        expect(order2).toBeInstanceOf(Order);
        expect(order2.sellerAddress).toBe("0x0");
        expect(order2.ownerAddress).toBe("0x0");
        expect(order2.amount).toStrictEqual(Amount.create(orderDTO.amount));
        expect(order2.unlockCode).toBe(0);
        expect(order2.state).toStrictEqual(new OrderState(orderDTO.state));
    })

    it("amount", () => {
        const order1 = new Order(orderStore, id1, orderProps);
        expect(order1.amount).toBeTruthy;
        expect(order1.amount).toStrictEqual(new Amount(1))
    })

    it("unlock", async () => {
        const order1 = new Order(orderStore, id1, orderProps);

        const unlockCode = order1.unlockCode;
        order1.unlock(unlockCode);
        expect(orderStore.unlock).toHaveBeenCalledTimes(1);
        expect(orderStore.unlock).toBeCalledWith(id1, orderProps.unlockCode);
    })

    it("get types", () => {
        const order1 = new Order(orderStore, id1, orderProps);

        const types = order1.type;
        expect(types).toBeTruthy();
        expect(types).toBe("ORDER");
    })

    it("refund", async () => {
        const order1 = new Order(orderStore, id1, orderProps);

        order1.refund();
        expect(orderStore.refund).toHaveBeenCalledTimes(1);
        expect(orderStore.refund).toBeCalledWith(id1);
    })

    it("should update the orderstate using the setter",  () => {
        const order1 = new Order(orderStore, id1, orderProps);
        order1.state = new OrderState("Paid");
        expect(order1.state).toStrictEqual(new OrderState("Paid"));
    })

    it("should  update the order", () =>  {
        const order1 = new Order(orderStore, id1, orderProps);
        const order2 = new Order(orderStore, id2, {
            ...orderProps,
            state: new OrderState("Paid"),
        });
        expect(order1.state).toStrictEqual(new OrderState("Created"));
        order1.patch(order2);
        expect(order1.state).toStrictEqual(new OrderState("Paid"));
    })
})