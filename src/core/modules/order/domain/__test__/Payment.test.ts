import PaymentDTO from "../../dtos/PaymentDTO";
import Amount from "../Amount"
import Payment from "../Payment"

type PaymentProps = {       //per non scrivere ogni volta in ogni test
    from: string;
    amount: Amount;
    timestamp: number;
}

const dto : PaymentDTO ={
    from : "0x0",
    amount : 10,
    timestamp : 10,

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

    it("timestamp is correct", () =>{
        const payment = new Payment(a);
        expect(payment.timestamp).toBe(10);
    })

    it("created payment is correct", () => {
        const payment = Payment.create(dto);
        expect(payment).toBeInstanceOf(Payment);
        expect(payment).toBeTruthy;
    })
});
