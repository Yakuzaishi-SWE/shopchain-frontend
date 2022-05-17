import RootStore from "core/shared/RootStore";
import { OrderStateEnum } from "types/enums";
import OrderDTO from "../../dtos/OrderDTO";
import IOrderRepo from "../../repo/IOrderRepo";
import OrderStore from "../OrderStore";

const rootStore: RootStore = {
} as RootStore;

const order:  OrderDTO = {
    sellerAddress: "0x0",
    ownerAddress: "0x0",
    amount: 0,
    unlockCode: 0,
    state: OrderStateEnum.CREATED,
}

const repo: IOrderRepo = {
    createOrder: jest.fn(async (data: any) => { return; }),
    getOrderById: jest.fn(async (id: string) => { return order; }),
    refund: jest.fn(async (id: string) => { return; }),
    unlock: jest.fn(async (id: string, code: number) => { return; }),
};

describe("OrderStore", () => {

    it("should create an order store", () => {
        const orderStore = new OrderStore(rootStore, repo);
        expect(Boolean(orderStore)).toBeTruthy();
        expect(orderStore).not.toBeFalsy();
    });


    it("createOrder", async () => {
        const orderStore = new OrderStore(rootStore, repo);
        const data =  {
            seller:  "0x0",
            amount:  "0",
            id:  "0x0",
        };
        await orderStore.createOrder(data);
        expect(repo.createOrder).toHaveBeenCalledWith(data);
        expect(repo.createOrder).toHaveBeenCalledTimes(1);
    });
})