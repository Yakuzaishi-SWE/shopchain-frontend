import MoneyBoxOrderRepo from "../MoneyBoxOrderRepo"
import MoneyBoxManagerContract from '../../../../../provider/contracts/MoneyBoxManagerContract';
import Address from '../../../../../provider/domain/Address';
import PaymentDTO from "core/modules/order/dtos/PaymentDTO";

const id1 = "550e8400-e29b-41d4-a716-446655440000";
const id2 = "770e8400-e29b-41d4-a716-446655440000";

const send = jest.fn(async (data: { from: string, value: number }) => { });
const call = jest.fn(() => { });

const contract: MoneyBoxManagerContract = {
    instance: {
        methods: {
            newPayment: jest.fn((orderId: string, amount: number) => {
                return { send }
            }),
            getMoneyBoxPayments: jest.fn((orderId: string) => {
                return { call }
            }),
            // getAmountToFill: jest.fn((orderId: string) => {
            //     return { call }
            // }),
        }
    },
} as any;

const undefinedContract: MoneyBoxManagerContract = {
    instance: null,
} as any;

const address: Address = {
    address: "0x0",
} as any;

describe("MoneyBoxOrderRepo", () => {
    // !!! LE ISTANZE DELLA CLASSE CHE SI STA TESTANDO VANNO SEMPRE ALL'INTERNO DEI SINGOLI TEST, NON BISOGNA CONDIVIDERLE COME I DATI STATICI PRECEDENTI
    // !!! in maniera alternativa si crea una funzione che ritorna queste istanze: function createMoneyBoxOrderRepo() { return new .... }
    // const moneyBoxOrderRepo = new MoneyBoxOrderRepo(contract, address); 
    // const moneyBoxOrderRepo_undefined = new MoneyBoxOrderRepo(undefinedContract, address);

    it("should create an instance of MoneyBoxOrderRepo", () => {
        expect(moneyBoxOrderRepo).toBeTruthy();
        expect(moneyBoxOrderRepo).not.toBeFalsy();
    });

    describe("should do a newPayment", () => {
        it("defined contract instance", async () => {
            await moneyBoxOrderRepo.newPayment(id1, 1);
            expect(send).toHaveBeenCalled();
            expect(send).toHaveBeenCalledWith({ from: address.address, value: 1 });
            expect(contract.instance?.methods.newPayment).toHaveBeenCalled();
            expect(contract.instance?.methods.newPayment).toHaveBeenCalledWith(id1, 1);
        })

        it("undefined contract instance", async () => {
            try {
                await moneyBoxOrderRepo_undefined.newPayment("0x0", 1)
            } catch(err) {
                expect(err).toBeTruthy();
                expect(err).toStrictEqual(new Error("Contract not loaded"));
            }
        })

    })

    describe("should get payments", () => {

        it("defined contract instance", async () => {
            await moneyBoxOrderRepo.newPayment(id1, 1);
            const payments = await moneyBoxOrderRepo.getPayments(id1);

            expect(contract.instance?.methods.getMoneyBoxPayments).toBeCalledTimes(1);
            expect(contract.instance?.methods.getMoneyBoxPayments).toBeCalledWith(id1);
        })

        it("undefined contract instance", async () => {
            await expect(async () => {
                await moneyBoxOrderRepo_undefined.getPayments(id1)
            })
                .rejects
                .toThrow("Contract not loaded");
        })
    })

    describe("should get the amount to fill", () => {

        it("defined contract instance", async () => {
            await moneyBoxOrderRepo.getAmountToFill(id1);

            expect(call).toHaveBeenCalled();
            expect(contract.instance?.methods.getAmountToFill).toBeCalledTimes(1);
            expect(contract.instance?.methods.getAmountToFill).toBeCalledWith(id1);
        })

        it("undefined contract instance", async () => {
            await expect(async () => {
                await moneyBoxOrderRepo_undefined.getAmountToFill(id1)
            })
                .rejects
                .toThrow("Contract not loaded");
        })

    })

});
