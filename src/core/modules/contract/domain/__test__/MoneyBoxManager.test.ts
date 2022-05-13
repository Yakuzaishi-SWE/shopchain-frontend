import IMoneyBoxManagerRepo from "../../repo/IMoneyBoxManagerRepo";
import MoneyBoxManager from "../MoneyBoxManager";

const repo: IMoneyBoxManagerRepo = {
    getContractBalance: jest.fn(async () => { return 1; }),
    getOrderCount: jest.fn(async () => { return 0; }),
}

describe("MoneyBoxManager", () => {

    describe("should create an instance of MoneyBoxManager", () => {

        it("constructor with parameter", () => {
            const moneyBoxManager = new MoneyBoxManager(repo);
            expect(moneyBoxManager).toBeTruthy();
            expect(moneyBoxManager).not.toBeFalsy();
        });

        it("default constructor", () => {
            const moneyBoxManagerDef = new MoneyBoxManager();
            expect(moneyBoxManagerDef).toBeTruthy();
            expect(moneyBoxManagerDef).not.toBeFalsy();
        });
    });

});