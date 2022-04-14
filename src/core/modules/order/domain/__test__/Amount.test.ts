import Amount from "../Amount";


describe("Amount", () =>  {


    it("should create an instance of Amount", () => {
        const amount = new Amount(1);
        expect(Boolean(amount)).toBeTruthy();
        expect(amount).not.toBeFalsy();
    });

    it("should update the amount", () => {
        const amount = new Amount(1);
        amount.setAmount(2);
        expect(amount.wei).toBe(2);
    });

    it("should get the FTM value correctly",() => {
        const amount = new Amount(1);
        expect(amount.FTM).toBe(0.000000000000000001);
    });

    it("should create the amount properly", () => {
        //expect(Amount.create(1)).toBeTruthy();
        //not sure tho
        const amount = Amount.create(1);
        expect(amount.wei).toBe(1);
    })
    
});