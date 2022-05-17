import ContractStore from "../ContractStore";

describe("ContractStore", () => {

  it("should create an instance of ContractStore", () => {
    const contractStore = new ContractStore();
    expect(contractStore).toBeTruthy();
    expect(contractStore).not.toBeFalsy();
  });

})
