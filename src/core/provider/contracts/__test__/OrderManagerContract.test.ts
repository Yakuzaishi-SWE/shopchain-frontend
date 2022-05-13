import { observable } from "mobx";
import { Contract } from "web3-eth-contract";
import W3Store from "../../domain/W3Store";
import IContractRepo from "../../repo/IContractRepo";
import OrderManagerContract from "../OrderManagerContract";

const w3store = observable({
    web3: null,
} as any);

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

    it("should get instance", async () => {
        const contract = new OrderManagerContract(w3store, repo);
        const i = contract.instance;
        expect(i).toBeNull();
        expect(repo.init).toHaveBeenCalledTimes(0);
        w3store.web3 = new Date();
        contract.instance;
        expect(repo.init).toHaveBeenCalledTimes(1);
    });

});