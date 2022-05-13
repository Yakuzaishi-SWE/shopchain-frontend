import OrderRepo from "../OrderRepo"
import OrderManagerContract from "../../../../../provider/contracts/OrderManagerContract";
import Address from "../../../../../provider/domain/Address";
import OrderStore from "../../../store/OrderStore";
import Amount from "../../../domain/Amount";
import OrderDTO from "../../../dtos/OrderDTO";
import OrderState from "../../../domain/OrderState";
import { OrderStateEnum } from "../../../../../../types/enums";


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

const rootStore: OrderStore = {

} as OrderStore;

const contract: OrderManagerContract = {
    instance: {
        methods: {
            newOrder: jest.fn((seller: string, amount: number, id: string) => {
                return { send }
            }),
            confirmReceived: jest.fn((id: string, code: number) => {
                return { send }
            }),
            refund: jest.fn((id: string) => {
                return { send }
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

const undefinedContract: OrderManagerContract = {
    instance: null,
} as any;

const address: Address = {
    address: "0x0",
} as any;

describe("OrderRepo", () => {

    it("should create an instance of OrderRepo", () => {
        const _orderRepo = new OrderRepo(rootStore, contract, address);
        expect(_orderRepo).toBeTruthy();
        expect(_orderRepo).not.toBeFalsy();
    })

    describe("createOrder", () => {

        it("defined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, contract, address);
            const data = { seller: "0x0", amount: "0x0", id: "0x0" };
            await _orderRepo.createOrder(data);
            expect(send).toHaveBeenCalled();
            expect(send).toHaveBeenCalledWith({ from: address.address, value: data.amount });
            expect(contract.instance?.methods.newOrder).toHaveBeenCalled();
            expect(contract.instance?.methods.newOrder).toHaveBeenCalledWith(data.seller, data.amount, data.id);
        });

        it("undefined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, undefinedContract, address);
            const data = { seller: "0x0", amount: "0x0", id: "0x0" };
            try {
                await _orderRepo.createOrder(data);
            } catch (err) {
                expect(send).not.toHaveBeenCalled();
                expect(contract.instance?.methods.newOrder).not.toHaveBeenCalled();
            }
        });
    });

    describe("unlock", () => {

        it("defined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, contract, address);
            const id = "0x0";
            const code = 0;
            await _orderRepo.unlock(id, code);
            expect(send).toHaveBeenCalled();
            expect(send).toHaveBeenCalledWith({ from: address.address });
            expect(contract.instance?.methods.confirmReceived).toHaveBeenCalled();
            expect(contract.instance?.methods.confirmReceived).toHaveBeenCalledWith(id, code);
        });

        it("undefined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, undefinedContract, address);
            const id = "0x0";
            const code = 0;
            try {
                await _orderRepo.unlock(id, code);
            } catch (err) {
                expect(send).not.toHaveBeenCalled();
                expect(contract.instance?.methods.confirmReceived).not.toHaveBeenCalled();
            }
        });
    });

    describe("refund", () => {

        it("defined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, contract, address);
            const id = "0x0";
            await _orderRepo.refund(id);
            expect(send).toHaveBeenCalled();
            expect(send).toHaveBeenCalledWith({ from: address.address });
            expect(contract.instance?.methods.refund).toHaveBeenCalled();
            expect(contract.instance?.methods.refund).toHaveBeenCalledWith(id);
        });

        it("undefined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, undefinedContract, address);
            const id = "0x0";
            try {
                await _orderRepo.refund(id);
            } catch (err) {
                expect(send).not.toHaveBeenCalled();
                expect(contract.instance?.methods.refund).not.toHaveBeenCalled();
            }
        });
    });

    describe("getOrderById", () => {

        it("defined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, contract, address);
            const id = "0x0";
            const order = await _orderRepo.getOrderById(id);
            expect(callData).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrderById).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrderById).toHaveBeenCalledWith(id);
        });

        it("undefined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, undefinedContract, address);
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
            const _orderRepo = new OrderRepo(rootStore, contract, address);
            const seller = "0x0";
            const orders = await _orderRepo.getOrdersBySeller(seller);
            expect(callArr).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrdersBySeller).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrdersBySeller).toHaveBeenCalledWith(seller);
        });

        it("undefined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, undefinedContract, address);
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
            const _orderRepo = new OrderRepo(rootStore, contract, address);
            const buyer = "0x0";
            const orders = await _orderRepo.getOrdersByBuyer(buyer);
            expect(callArr).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrdersByBuyer).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrdersByBuyer).toHaveBeenCalledWith(buyer);
        });

        it("undefined contract instance", async () => {
            const _orderRepo = new OrderRepo(rootStore, undefinedContract, address);
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
