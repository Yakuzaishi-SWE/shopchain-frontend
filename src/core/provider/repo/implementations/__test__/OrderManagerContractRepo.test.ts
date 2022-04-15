import W3Store from "core/provider/domain/W3Store";
import Web3 from "web3";
import IContractRepo from "../../IContractRepo";
import OrderManagerContractRepo from "../OrderManagerContractRepo";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";


const w3store: W3Store = {
    web3: {
        eth: {
            Contract: jest.fn()
        }
    }
} as any;

const w3storeUndef: W3Store = {
    web3: null
} as any;

const repo:  IContractRepo = {
    init: jest.fn(() => ({} as Contract)),
}

const address = "0x0000000000000000000000000000000000000000";
const abis = [{} as AbiItem];

describe("OderManagerContractRepo", () => {

    test("creates OrderManagerContractRepo", () =>{
        const repo = new OrderManagerContractRepo(w3store);
        expect(repo).toBeInstanceOf(OrderManagerContractRepo);
    });

    test("init web3 not set", () => {
        const repo = new OrderManagerContractRepo(w3storeUndef, address, abis);
        try {
            repo.init();
        } catch(err) {
            expect(err).toBeInstanceOf(Error);
            expect(err).toStrictEqual(new Error("Web3 is not initialized"));
        }
    });

    test("init", () => {
        const repo = new OrderManagerContractRepo(w3store, address, abis);
        repo.init();
        expect(w3store.web3?.eth.Contract).toHaveBeenCalledTimes(1);
        expect(w3store.web3?.eth.Contract).toHaveBeenCalledWith(abis, address);
    })
});