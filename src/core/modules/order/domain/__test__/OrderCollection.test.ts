import exp from "constants";
import OrderStore from "../../store/OrderStore";
import Amount from "../Amount";
import Order from "../Order";
import OrderCollection from "../OrderCollection";
import OrderState from "../OrderState";

const id1 = "550e8400-e29b-41d4-a716-446655440000";
const id2 = "770e8400-e29b-41d4-a716-446655440000";

const addr1 = "0x5df80424c525af935c46b14E727564f1c4B21930";
const addr2 = "0xFAC4df168B9f306eB8f4E6f54117B27d2B6fC1d8";

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
    sellerAddress: addr1,
    ownerAddress: addr2,
    amount: new Amount(1),
    unlockCode: 123,
    state: new OrderState("Created"),
}

describe("test OrderCollection", () => {

    it("test addOrder", () => {
        const order = new Order(orderStore, id1, orderProps);

        const ordercoll = new OrderCollection();

        ordercoll.add(order);
        expect(ordercoll.orders.size).toBe(1);
        expect(ordercoll.orderarr).toContain(order);
    })

    it("test getById", () => {
        const order = new Order(orderStore, id1, orderProps);
        const ordercoll = new OrderCollection();
        ordercoll.add(order);

        const result = ordercoll.getById(id1);
        expect(result).toBe(order);
    })

    it("test getBySeller", () => {
        const order1 = new Order(orderStore, id1, orderProps);
        const order2 = new Order(orderStore, id2, orderProps);
        const ordercoll = new OrderCollection();
        ordercoll.add(order1);
        ordercoll.add(order2);

        const order_array = ordercoll.getBySeller(addr1);
        expect(order_array.length).toBe(2);
        expect(order_array[0]).toBeInstanceOf(Order);
        expect(order_array[1]).toBeInstanceOf(Order);
    })

    it("test getByOwner", () => {
        const order1 = new Order(orderStore, id1, orderProps);
        const order2 = new Order(orderStore, id2, orderProps);
        const ordercoll = new OrderCollection();
        ordercoll.add(order1);
        ordercoll.add(order2);

        const order_array = ordercoll.getByOwner(addr2);
        expect(order_array.length).toBe(2);
        expect(order_array[0]).toBeInstanceOf(Order);
        expect(order_array[1]).toBeInstanceOf(Order);
    })

    it("test update", () => {
        const order1 = new Order(orderStore, id1, orderProps);
        const order2 = new Order(orderStore, id2, orderProps);
        const ordercoll = new OrderCollection();

        ordercoll.add(order1);

        order1.state = new OrderState("Paid");
        
        ordercoll.upd(order1);  // test TRUE branch
        ordercoll.upd(order2);  // test FALSE branch

        expect(ordercoll.getById(id1)?.state).toStrictEqual(new OrderState("Paid"));
        expect(ordercoll.getById(id2)).toBeInstanceOf(Order);
    })
})