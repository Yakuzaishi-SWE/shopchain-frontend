import { useDebugValue } from "react";
import { isYieldExpression } from "typescript";
import Amount from "../Amount"
import Payment from "../Payment"

type PaymentProps = {
    from: string;
    amount: Amount;
    timestamp: number;
}

const a : PaymentProps = {
    from : "0x0",
    amount : new Amount(1),
    timestamp : 10,
}
describe("Payment", () => {

    it("from address is correct", () =>{
        const payment = new Payment(a);
        expect(payment.from).toBe("0x0");
    });

    it("amount is correct", () =>{
        const payment = new Payment(a);
        expect(payment.amount.wei).toBe(1);
    })

    it("amount is correct", () =>{
        const payment = new Payment(a);
        expect(payment.timestamp).toBe(10);
    })

    it("created payment is correct", () => {

    })
});