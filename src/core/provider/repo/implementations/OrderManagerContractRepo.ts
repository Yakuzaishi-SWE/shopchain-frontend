import W3Store from "../../domain/W3Store";
import IContractRepo from "../IContractRepo";
import { Contract } from "web3-eth-contract";
import { makeObservable, observable } from "mobx";
import ORDER_MANAGER_ABI from "./OrderManagerContractABI.json";
import { AbiItem } from "web3-utils";

const ORDER_MANAGER_ADDRESS = "0xdd21569051115e8717a0DDF756614F3948b7F3DE";
// const ORDER_MANAGER_ADDRESS = "0xE162aFf01B9a07D61d6062c9E2403936a153411b";

export default class OrderManagerContractRepo implements IContractRepo {
    private readonly w3store: W3Store;
    private readonly address: string;
    private readonly abis: AbiItem[];

    constructor(w3store: W3Store, address: string = ORDER_MANAGER_ADDRESS, abis: AbiItem[] = ORDER_MANAGER_ABI as AbiItem[]) {
        this.w3store = w3store;
        this.address = address;
        this.abis = abis;
        makeObservable<this, "w3store" | "address">(this, {
            w3store: observable,
            address: observable,
        });
    }

    init(): Contract {
        if (!this.w3store.web3) throw new Error("Web3 is not initialized");
        return new this.w3store.web3.eth.Contract(this.abis, this.address);
    }
}