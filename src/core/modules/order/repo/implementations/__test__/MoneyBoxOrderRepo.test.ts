// import MoneyBoxOrderRepo from "../MoneyBoxOrderRepo"
// import MoneyBoxManagerContract from '../../../../../provider/contracts/MoneyBoxManagerContract';
// import Address from '../../../../../provider/domain/Address';
// import MoneyBoxOrderStore from "../../../store/MoneyBoxOrderStore";

// const moenyBoxStore = {

// } as MoneyBoxOrderStore;

// const id1 = "550e8400-e29b-41d4-a716-446655440000";
// const id2 = "770e8400-e29b-41d4-a716-446655440000";

// const send = jest.fn(async (data: { from: string, value: number }) => { });
// const call = jest.fn(() => { });
// const callArr = jest.fn(() => ([]));

// const contract: MoneyBoxManagerContract = {
//     instance: {
//         methods: {
//             newPayment: jest.fn((orderId: string, amount: number) => {
//                 return { send }
//             }),
//             getMoneyBoxPayments: jest.fn((orderId: string) => {
//                 return { call: callArr }
//             }),
//             getAmountToFill: jest.fn((orderId: string) => {
//                 return { call }
//             }),
//         }
//     },
// } as any;

// const undefinedContract: MoneyBoxManagerContract = {
//     instance: null,
// } as any;

// const address: Address = {
//     address: "0x0",
// } as any;

// describe("MoneyBoxOrderRepo", () => {

//     beforeEach(() => {
//         jest.clearAllMocks();
//     })

//     it("should create an instance of MoneyBoxOrderRepo", () => {
//         const moneyBoxOrderRepo = new MoneyBoxOrderRepo(moenyBoxStore, contract, address);
//         expect(moneyBoxOrderRepo).toBeTruthy();
//         expect(moneyBoxOrderRepo).not.toBeFalsy();
//     });

//     describe("should do a newPayment", () => {
//         it("defined contract instance", async () => {
//             const moneyBoxOrderRepo = new MoneyBoxOrderRepo(moenyBoxStore, contract, address);
//             await moneyBoxOrderRepo.newPayment(id1, "1");
//             expect(send).toHaveBeenCalled();
//             expect(send).toHaveBeenCalledWith({ from: address.address, value: "1" });
//             expect(contract.instance?.methods.newPayment).toHaveBeenCalled();
//             expect(contract.instance?.methods.newPayment).toHaveBeenCalledWith(id1, "1");
//         })

//         it("undefined contract instance", async () => {
//             const moneyBoxOrderRepo_undefined = new MoneyBoxOrderRepo(moenyBoxStore, undefinedContract, address);
//             try {
//                 await moneyBoxOrderRepo_undefined.newPayment("0x0", "1")
//             } catch (err) {
//                 expect(err).toBeTruthy();
//                 expect(err).toStrictEqual(new Error("Contract not loaded"));
//             }
//         })

//     })

//     describe("should get payments", () => {

//         it("defined contract instance", async () => {
//             const moneyBoxOrderRepo = new MoneyBoxOrderRepo(moenyBoxStore, contract, address);
//             await moneyBoxOrderRepo.newPayment(id1, "1");
//             const payments = await moneyBoxOrderRepo.getPayments(id1);

//             expect(contract.instance?.methods.getMoneyBoxPayments).toBeCalledTimes(1);
//             expect(contract.instance?.methods.getMoneyBoxPayments).toBeCalledWith(id1);
//         })

//         it("undefined contract instance", async () => {
//             const moneyBoxOrderRepo_undefined = new MoneyBoxOrderRepo(moenyBoxStore, undefinedContract, address);
//             try {
//                 await moneyBoxOrderRepo_undefined.getPayments(id1)
//             } catch (err) {
//                 expect(err).toBeTruthy();
//                 expect(err).toStrictEqual(new Error("Contract not loaded"));
//             }
//         })
//     })

//     describe("should get the amount to fill", () => {

//         it("defined contract instance", async () => {
//             const moneyBoxOrderRepo = new MoneyBoxOrderRepo(moenyBoxStore, contract, address);
//             await moneyBoxOrderRepo.getAmountToFill(id1);

//             expect(call).toHaveBeenCalled();
//             expect(contract.instance?.methods.getAmountToFill).toBeCalledTimes(1);
//             expect(contract.instance?.methods.getAmountToFill).toBeCalledWith(id1);
//         })

//         it("undefined contract instance", async () => {
//             const moneyBoxOrderRepo_undefined = new MoneyBoxOrderRepo(moenyBoxStore, undefinedContract, address);
//             try {
//                 await moneyBoxOrderRepo_undefined.getAmountToFill(id1)
//             } catch (err) {
//                 expect(err).toBeTruthy();
//                 expect(err).toStrictEqual(new Error("Contract not loaded"));
//             }
//         })

//     })

// });
