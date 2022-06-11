import MoneyBoxOrderRepo from "../MoneyBoxOrderRepo"
import MoneyBoxManagerContract from '../../../../../provider/contracts/MoneyBoxManagerContract';
import Address from '../../../../../provider/domain/Address';
import MoneyBoxOrderStore from "../../../store/MoneyBoxOrderStore";
import UniswapRouter from "core/provider/contracts/UniswapRouter";
import OrderDTO from "core/modules/order/dtos/OrderDTO";
import { OrderStateEnum } from "types/enums";

const moneyBoxStore = {

} as MoneyBoxOrderStore;

const id1 = "550e8400-e29b-41d4-a716-446655440000";
const id2 = "770e8400-e29b-41d4-a716-446655440000";

const send = jest.fn(async (data: { from: string, value: number }) => { });
const call = jest.fn(() => { });
const callArr = jest.fn(() => ([]));
const callData = jest.fn(async (): Promise<OrderDTO> => ({
    amount: 1,
    ownerAddress: "0x0",
    sellerAddress: "0x0",
    state: OrderStateEnum.CANCELLED,
    timestamp: 1234,
    unlockCode: 123,
}))

const contract: MoneyBoxManagerContract = {
    instance: {
        methods: {
            newPayment: jest.fn((orderId: string, amount: number) => {
                return { send }
            }),
            getMoneyBoxPayments: jest.fn((orderId: string) => {
                return { call: callArr }
            }),
            getAmountToFill: jest.fn((orderId: string) => {
                return { call }
            }),
            getOrderById: jest.fn((id: string) => {
                return { call: callData }
            }),
            getOrdersBySeller: jest.fn((seller: string) => {
                return { call: callArr }
            }),
            getOrdersByBuyer: jest.fn((buyer: string) => {
                return { call: callArr }
            }),
        }
    },
} as any;

const undefinedContract: MoneyBoxManagerContract = {
    instance: null,
} as any;

const address: Address = {
    address: "0x0",
} as any;

const uniswap: UniswapRouter = {
    instance: {
        methods: {
            getAmountsOut: jest.fn((amount: number, path: string) => {
                return { 
                    call: jest.fn(() => {
                        return [0, 1];
                    })
                }
            })
        }
    },
} as any;

const undefinedUniswap: UniswapRouter = {
    instance: null,
} as any;

describe("MoneyBoxOrderRepo", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("should create an instance of MoneyBoxOrderRepo", () => {
        const moneyBoxOrderRepo = new MoneyBoxOrderRepo(moneyBoxStore, contract, uniswap, address);
        expect(moneyBoxOrderRepo).toBeTruthy();
        expect(moneyBoxOrderRepo).not.toBeFalsy();
    });

    describe("should do a newPayment", () => {
        it("defined contract instance", async () => {
            const moneyBoxOrderRepo = new MoneyBoxOrderRepo(moneyBoxStore, contract, uniswap, address);
            await moneyBoxOrderRepo.newPayment(id1, "1");
            expect(send).toHaveBeenCalled();
            expect(send).toHaveBeenCalledWith({ from: address.address, value: "1" });
            expect(contract.instance?.methods.newPayment).toHaveBeenCalled();
            expect(contract.instance?.methods.newPayment).toHaveBeenCalledWith(id1, "1", 1);
        })

        it("undefined contract instance", async () => {
            const moneyBoxOrderRepo_undefined = new MoneyBoxOrderRepo(moneyBoxStore, undefinedContract, uniswap, address);
            try {
                await moneyBoxOrderRepo_undefined.newPayment("0x0", "1")
            } catch (err) {
                expect(err).toBeTruthy();
                expect(err).toStrictEqual(new Error("Contract not loaded"));
            }
        })

    })

    describe("should get payments", () => {

        it("defined contract instance", async () => {
            const moneyBoxOrderRepo = new MoneyBoxOrderRepo(moneyBoxStore, contract, uniswap, address);
            await moneyBoxOrderRepo.newPayment(id1, "1");
            const payments = await moneyBoxOrderRepo.getPayments(id1);

            expect(contract.instance?.methods.getMoneyBoxPayments).toBeCalledTimes(1);
            expect(contract.instance?.methods.getMoneyBoxPayments).toBeCalledWith(id1);
        })

        it("undefined contract instance", async () => {
            const moneyBoxOrderRepo_undefined = new MoneyBoxOrderRepo(moneyBoxStore, undefinedContract, uniswap, address);
            try {
                await moneyBoxOrderRepo_undefined.getPayments(id1)
            } catch (err) {
                expect(err).toBeTruthy();
                expect(err).toStrictEqual(new Error("Contract not loaded"));
            }
        })
    })

    describe("should get the amount to fill", () => {

        it("defined contract instance", async () => {
            const moneyBoxOrderRepo = new MoneyBoxOrderRepo(moneyBoxStore, contract, uniswap, address);
            await moneyBoxOrderRepo.getAmountToFill(id1);

            expect(call).toHaveBeenCalled();
            expect(contract.instance?.methods.getAmountToFill).toBeCalledTimes(1);
            expect(contract.instance?.methods.getAmountToFill).toBeCalledWith(id1);
        })

        it("undefined contract instance", async () => {
            const moneyBoxOrderRepo_undefined = new MoneyBoxOrderRepo(moneyBoxStore, undefinedContract, uniswap, address);
            try {
                await moneyBoxOrderRepo_undefined.getAmountToFill(id1)
            } catch (err) {
                expect(err).toBeTruthy();
                expect(err).toStrictEqual(new Error("Contract not loaded"));
            }
        })

    })

    describe("getOrderById", () => {

        it("defined contract instance", async () => {
            const _orderRepo = new MoneyBoxOrderRepo(moneyBoxStore, contract, uniswap, address);
            const id = "0x0";
            const order = await _orderRepo.getOrderById(id);
            expect(callData).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrderById).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrderById).toHaveBeenCalledWith(id);
        });

        it("undefined contract instance", async () => {
            const _orderRepo = new MoneyBoxOrderRepo(moneyBoxStore, undefinedContract, uniswap, address);
            const id = "0x0"; try {
                const order = await _orderRepo.getOrderById(id);
            } catch (err) {
                expect(callData).not.toHaveBeenCalled();
                expect(contract.instance?.methods.getOrderById).not.toHaveBeenCalled();
            }
        });
    });

    describe("getOrdersBySeller", () => {
        it("defined contract instance", async () => {
            const _orderRepo = new MoneyBoxOrderRepo(moneyBoxStore, contract, uniswap, address);
            const seller = "0x0";
            const orders = await _orderRepo.getOrdersBySeller(seller);
            expect(callArr).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrdersBySeller).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrdersBySeller).toHaveBeenCalledWith(seller);
        });

        it("undefined contract instance", async () => {
            const _orderRepo = new MoneyBoxOrderRepo(moneyBoxStore, undefinedContract, uniswap, address);
            const seller = "0x0";
            try {
                const orders = await _orderRepo.getOrdersBySeller(seller);
            } catch (err) {
                expect(err).toBeDefined();
                expect(callArr).not.toHaveBeenCalled();
                expect(contract.instance?.methods.getOrdersBySeller).not.toHaveBeenCalled();
            }
        });
    });

    describe("getOrdersByBuyer", () => {
        it("defined contract instance", async () => {
            const _orderRepo = new MoneyBoxOrderRepo(moneyBoxStore, contract, uniswap, address);
            const buyer = "0x0";
            const orders = await _orderRepo.getOrdersByBuyer(buyer);
            expect(callArr).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrdersByBuyer).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrdersByBuyer).toHaveBeenCalledWith(buyer);
        });

        it("undefined contract instance", async () => {
            const _orderRepo = new MoneyBoxOrderRepo(moneyBoxStore, undefinedContract, uniswap, address);
            const buyer = "0x0";
            try {
                const orders = await _orderRepo.getOrdersByBuyer(buyer);
            } catch (err) {
                expect(err).toBeDefined();
                expect(callArr).not.toHaveBeenCalled();
                expect(contract.instance?.methods.getOrdersByBuyer).not.toHaveBeenCalled();
            }
        });
    });

});
