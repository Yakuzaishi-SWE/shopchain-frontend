import MoneyBoxManager from "../MoneyBoxManager";
import IMoneyBoxManagerRepo from "../../repo/IMoneyBoxManagerRepo";

const repo : IMoneyBoxManagerRepo = {
  getContractBalance: jest.fn(async () => { return 1; }),
  getOrderCount: jest.fn(async () => { return 0; }),
}

describe("MoneyBoxManager", () => {
  
  it("should create an instance of MoneyBoxManager", () => {
      const moneyBoxManager = new MoneyBoxManager(repo);
      expect(moneyBoxManager).toBeTruthy();
      expect(moneyBoxManager).not.toBeFalsy();

      //default constructor
      const moneyBoxManagerDef = new MoneyBoxManager();
      expect (moneyBoxManagerDef).toBeTruthy();
      expect (moneyBoxManagerDef).not.toBeFalsy();
  });
  
});