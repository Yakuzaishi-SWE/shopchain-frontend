import OrderStore from "../../store/OrderStore";
import Amount from "../Amount";
import Order from "../Order";
import OrderCollection from "../OrderCollection";
import OrderState from "../OrderState";

const id1 = "550e8400-e29b-41d4-a716-446655440000";
const id2 = "770e8400-e29b-41d4-a716-446655440000";

const orderStore : OrderStore = {
} as OrderStore

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

const collectionTest : OrderCollection<any> = {
    addOrder: jest.fn((data: any) => {return;}),
} as unknown as OrderCollection<any>;

describe("test OrderCollection", () => {

    it("test addOrder", () => {
        const order = new Order(orderStore, id1, orderProps);

        collectionTest.addOrder(order);

        expect(collectionTest.addOrder).toBeCalledTimes(1);
        expect(collectionTest.addOrder).toBeCalledWith(order);
    })
})