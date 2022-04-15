import W3Store from "core/provider/domain/W3Store";
import IContractRepo from "core/provider/repo/IContractRepo";
import MoneyBoxManagerContractRepo from "core/provider/repo/implementations/MoneyBoxManagerContractRepo";
import MoneyBoxManagerContract from "../MoneyBoxManagerContract";
import { Contract } from "web3-eth-contract";


const w3store: W3Store = {} as any;

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

    it("should init", () => {
        const contract = new MoneyBoxManagerContract(w3store, repo);
        contract.init();
        expect(repo.init).toHaveBeenCalled();
        expect(contract.instance).toBeDefined();
    });
});