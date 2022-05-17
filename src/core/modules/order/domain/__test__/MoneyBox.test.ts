import { OrderStateEnum } from "../../../../../types/enums";
import OrderDTO from "../../dtos/OrderDTO";
import MoneyBoxOrderStore from "../../store/MoneyBoxOrderStore";
import Amount from "../Amount";
import MoneyBox from "../MoneyBox";
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
    timestamp: number
};

const orderDto: OrderDTO = {
    amount: 1,
    state: OrderStateEnum.CREATED,
    timestamp: 1,
    unlockCode: 1,
    ownerAddress: "0x0",
    sellerAddress: "0x0",
}

const orderProps : OrderProps = {
    sellerAddress: "0x0",
    ownerAddress: "0x0",
    amount: new Amount(1),
    unlockCode: 123,
    state: new OrderState("Created"),
    timestamp: 1234
}

const paymentCollection : PaymentCollection = {
    get: jest.fn((orderId: string) => { return; })
} as unknown as PaymentCollection;

const moneyboxOrderStore : MoneyBoxOrderStore = {
    getPayments: jest.fn(),
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

        await moneybox.amountToFill;
        expect(moneyboxOrderStore.getAmountToFill).toBeCalledTimes(1);
        expect(moneyboxOrderStore.getAmountToFill).toBeCalledWith(id1);
    })

    it("payments", () => {
        const moneybox = new MoneyBox(moneyboxOrderStore, id1, orderProps);

        const paymentsArray = moneybox.payments;
        //expect(paymentCollection).toBe(PaymentCollection);
        expect(moneyboxOrderStore.getPayments).toBeCalledTimes(1);
        expect(moneyboxOrderStore.getPayments).toBeCalledWith(id1);
    })

    it("get types", () => {
        const moneybox = new MoneyBox(moneyboxOrderStore, id1, orderProps);

        const types = moneybox.type;
        expect(types).toBeTruthy();
        expect(types).toBe("MONEYBOX");
    })

    it("cretes from static", () => {
        const moneybox = MoneyBox.create(moneyboxOrderStore, id1, orderDto);

        expect(moneybox).toBeTruthy();
        expect(moneybox).toBeInstanceOf(MoneyBox);
    })

});