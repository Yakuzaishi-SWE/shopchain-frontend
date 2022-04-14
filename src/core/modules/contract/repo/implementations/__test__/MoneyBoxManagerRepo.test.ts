import MoneyBoxManagerRepo from "../MoneyBoxManagerRepo";
import MoneyBoxManagerContract from '../../../../../provider/contracts/MoneyBoxManagerContract';

describe("MoneyBoxManagerRepo", () => {

  const contract: MoneyBoxManagerContract = {
  } as any;

  it("should create an instance of MoneyBoxManagerRepo", () => {
    const moneyBoxManagerRepo = new MoneyBoxManagerRepo(contract);
    expect(moneyBoxManagerRepo).toBeTruthy();
    expect(moneyBoxManagerRepo).not.toBeFalsy();
  });

});