import OrderRepo from "../OrderRepo"
import OrderManagerContract from "../../../../../provider/contracts/OrderManagerContract";
import Address from "../../../../../provider/domain/Address";

describe("OrderRepo", () => {

    const contract: OrderManagerContract = {} as any;
    const address: Address = {} as any

    it("should create an istance of OrderRrpo", () => {
        const _orderRepo = new OrderRepo(contract,address);
        expect(_orderRepo).toBeTruthy();
        expect(_orderRepo).not.toBeFalsy(); 
    })
})