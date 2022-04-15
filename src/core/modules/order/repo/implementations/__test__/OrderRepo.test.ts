import OrderRepo from "../OrderRepo"
import OrderManagerContract from "../../../../../provider/contracts/OrderManagerContract";
import Address from "../../../../../provider/domain/Address";

const send = jest.fn(async (data: { from: string, value: number }) => { });

const contract: OrderManagerContract = {
    instance: {
        methods: {
            newOrder: jest.fn((seller: string, amount: number, id: string) => {
                return { send }
            }),
            getOrderCount: jest.fn(() => {
                return { send }
            })
        }
    },
} as any;

const address: Address = {
    address: "0x0",
} as any;

describe("OrderRepo", () => {


    it("should create an istance of OrderRrpo", () => {
        const _orderRepo = new OrderRepo(contract, address);
        expect(_orderRepo).toBeTruthy();
        expect(_orderRepo).not.toBeFalsy();
    })

    describe("createOrder", () => {

        it("defined contract intsance", async () => {
            const _orderRepo = new OrderRepo(contract, address);
            const data = { seller: "0x0", amount: "0x0", id: "0x0" };
            await _orderRepo.createOrder(data);
            expect(send).toHaveBeenCalled();
            expect(send).toHaveBeenCalledWith({ from: address.address, value: data.amount });
            expect(contract.instance?.methods.newOrder).toHaveBeenCalled();
            expect(contract.instance?.methods.newOrder).toHaveBeenCalledWith(data.seller, data.amount, data.id);
        })
    });
});