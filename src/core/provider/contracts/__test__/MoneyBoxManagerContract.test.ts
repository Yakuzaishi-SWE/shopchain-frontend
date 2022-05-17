import IContractRepo from "core/provider/repo/IContractRepo";
import MoneyBoxManagerContract from "../MoneyBoxManagerContract";
import { Contract } from "web3-eth-contract";
import { observable } from "mobx";


const w3store = observable({
    web3: null,
} as any);

const repo:  IContractRepo = {
    init: jest.fn(() => ({} as Contract)),
}

describe("MoneyBoxManagerContract", () => {
    it("should create order manager contract", () => {
        const contract = new MoneyBoxManagerContract(w3store, repo);
        expect(contract).toBeInstanceOf(MoneyBoxManagerContract);
    });

    it("should create order manager contract with default repo", () => {
        const contract = new MoneyBoxManagerContract(w3store);
        expect(contract).toBeInstanceOf(MoneyBoxManagerContract);
    });

    it("should get instance", async () => {
        const contract = new MoneyBoxManagerContract(w3store, repo);
        const i = contract.instance;
        expect(i).toBeNull();
        expect(repo.init).toHaveBeenCalledTimes(0);
        w3store.web3 = new Date();
        contract.instance;
        expect(repo.init).toHaveBeenCalledTimes(1);
    });
});