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

    describe("should create an instance of OrderManager", () => {
        it("constructor with parameter", () => {
            const orderManager = new OrderManager(repo);
            expect(orderManager).toBeTruthy();
            expect(orderManager).not.toBeFalsy();
        });
        it("default constructor", () => {
            const orderManagerDef = new OrderManager();
            expect(orderManagerDef).toBeTruthy();
            expect(orderManagerDef).not.toBeFalsy();
        });
    });

    describe("should get order count", () => {
        it("defined instance", async () => {
            const orderManager = new OrderManager(repo);
            await orderManager.getOrderCount();
            expect(repo.getOrderCount).toBeCalledTimes(1);
            expect(orderManager.count).toBe(1);
        });

        it("undefined instance", async () => {
            const orderManager = new OrderManager(repoUndef);
            await orderManager.getOrderCount();
            expect(repoUndef.getOrderCount).toBeCalledTimes(1);
            expect(orderManager.count).toBe(null);
        });
    });

    describe("should get contract balance", () => {
        it("defined instance", async () => {
            const orderManager = new OrderManager(repo);
            await orderManager.getContractBalance();
            expect(repo.getContractBalance).toBeCalledTimes(1);
            expect(orderManager.balance).toBe(1);
        });

        it("undefined instance", async () => {
            const orderManager = new OrderManager(repoUndef);
            await orderManager.getContractBalance();
            expect(repoUndef.getContractBalance).toBeCalledTimes(1);
            expect(orderManager.balance).toBe(null);
        });
    });
});