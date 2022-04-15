import W3Store from "core/provider/domain/W3Store";
import IContractRepo from "core/provider/repo/IContractRepo";
import { Contract } from "web3-eth-contract";
import OrderManagerContract from "../OrderManagerContract";

const w3store: W3Store = {} as any;

const repo:  IContractRepo = {
    init: jest.fn(() => ({} as Contract)),
}

describe("OrderManagerContract", () => {


    it("should create order manager contract", () => {
        const contract = new OrderManagerContract(w3store, repo);
        expect(contract).toBeInstanceOf(OrderManagerContract);
    });

    it("should create order manager contract with default repo", () => {
        const contract = new OrderManagerContract(w3store);
        expect(contract).toBeInstanceOf(OrderManagerContract);
    });

    it("should set contract", () => {
        const contract = new OrderManagerContract(w3store, repo);
        const date = new Date() as any;
        contract.setContract(date);
        expect(contract.instance).toBeDefined();
        expect(contract.instance).toBe(date);
    });

    it("should init", () => {
        const contract = new OrderManagerContract(w3store, repo);
        contract.init();
        expect(repo.init).toHaveBeenCalled();
        expect(contract.instance).toBeDefined();
    });

});