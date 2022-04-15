import OrderManager from "../OrderManager";
import IOrderManagerRepo from "../../repo/IOrderManagerRepo";

const repo: IOrderManagerRepo = {
    getContractBalance: jest.fn(async () => { return 1; }),
    getOrderCount: jest.fn(async () => { return 1; }),
}

const repoUndef: IOrderManagerRepo = {
    getContractBalance: jest.fn(async () => { return undefined; }),
    getOrderCount: jest.fn(async () => { return undefined; }),
}

beforeEach(()  =>  {
    jest.clearAllMocks();
})

describe("OrderManager", () => {

    it("should create an instance of OrderManager", () => {
        const orderManager = new OrderManager(repo);
        expect(orderManager).toBeTruthy();
        expect(orderManager).not.toBeFalsy();

        //default constructor
        const orderManagerDef = new OrderManager();
        expect(orderManagerDef).toBeTruthy();
        expect(orderManagerDef).not.toBeFalsy();
    })

    it("should get the order count", async () => {
        const orderManager = new OrderManager(repo);
        await orderManager.getOrderCount();
        expect(repo.getOrderCount).toBeCalledTimes(1);
        expect(orderManager.count).toBe(1);
    })

    it("should not get the order count", async () => {
        const orderManager = new OrderManager(repoUndef);
        await orderManager.getOrderCount();
        expect(repoUndef.getOrderCount).toBeCalledTimes(1);
        expect(orderManager.count).toBe(null);
    })

    it("should get the contract balance", async () => {
        const orderManager = new OrderManager(repo);
        await orderManager.getContractBalance();
        expect(repo.getContractBalance).toBeCalledTimes(1);
        expect(orderManager.balance).toBe(1);
    })

    it("should get the contract balance", async () => {
        const orderManager = new OrderManager(repoUndef);
        await orderManager.getContractBalance();
        expect(repoUndef.getContractBalance).toBeCalledTimes(1);
        expect(orderManager.balance).toBe(null);
    })

});