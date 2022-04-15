import MoneyBoxOrderRepo from "../MoneyBoxOrderRepo"
import MoneyBoxManagerContract from '../../../../../provider/contracts/MoneyBoxManagerContract';
import Address from '../../../../../provider/domain/Address';


describe("MoneyBoxOrderRepo", () => {

    const contract: MoneyBoxManagerContract = {} as any;
    const address: Address = {} as any
  
    it("should create an instance of MoneyBoxOrderRepo", () => {
      const moneyBoxOrderRepo = new MoneyBoxOrderRepo(contract,address);
      expect(moneyBoxOrderRepo).toBeTruthy();
      expect(moneyBoxOrderRepo).not.toBeFalsy();
    });
  
  });
