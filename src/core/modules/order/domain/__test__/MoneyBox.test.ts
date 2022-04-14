
import MoneyBox from "../MoneyBox";
import MoneyBoxOrderStore from "../../store/MoneyBoxOrderStore";
import Order from "../Order";
import Payment from "../Payment";
import Amount from "../Amount";
import OrderState from "../OrderState";
import PaymentCollection from "../PaymentCollection";

const id1 = "550e8400-e29b-41d4-a716-446655440000";
const id2 = "770e8400-e29b-41d4-a716-446655440000";

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

const paymentCollection : PaymentCollection = {
    get: jest.fn((orderId: string) => { return; })
} as unknown as PaymentCollection;

const moneyboxOrderStore : MoneyBoxOrderStore = {
    payments : {
        get: jest.fn ((id: string) => { return; })
    },
    getAmountToFill: jest.fn(async (id: string) => { return; }),
} as unknown as MoneyBoxOrderStore;

describe("MoneyBox", () => {

    it("test constructor", () => {
        const moneybox = new MoneyBox(moneyboxOrderStore, id1, orderProps);

        expect(moneybox).toBeTruthy;
        expect(moneybox).toBeInstanceOf(MoneyBox);
    })

    it("amount to fill is correct", async () => {
        const moneybox = new MoneyBox(moneyboxOrderStore, id1, orderProps);

        await moneybox.getAmountToFill();
        expect(moneyboxOrderStore.getAmountToFill).toBeCalledTimes(1);
        expect(moneyboxOrderStore.getAmountToFill).toBeCalledWith(id1);
    })

    it("payments", () => {
        const moneybox = new MoneyBox(moneyboxOrderStore, id1, orderProps);

        const paymentsArray = moneybox.payments;
        //expect(paymentCollection).toBe(PaymentCollection);
        expect(moneyboxOrderStore.payments.get).toBeCalledTimes(1);
        expect(moneyboxOrderStore.payments.get).toBeCalledWith(id1);
    })

});