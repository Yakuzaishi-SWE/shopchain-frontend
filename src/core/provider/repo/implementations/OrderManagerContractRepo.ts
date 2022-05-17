import W3Store from "../../domain/W3Store";
import IContractRepo from "../IContractRepo";
import { Contract } from "web3-eth-contract";
import { makeObservable, observable } from "mobx";
import ORDER_MANAGER_ABI from "./OrderManagerContractABI.json";
import { AbiItem } from "web3-utils";

const ORDER_MANAGER_ADDRESS = "0xD9e1D649434573947d9ca606d7EFf3C6b4CFa377";

export default class OrderManagerContractRepo implements IContractRepo {
    private readonly w3store: W3Store;
    private readonly address: string;
    private readonly abis: AbiItem[];

    constructor(w3store: W3Store, address: string = ORDER_MANAGER_ADDRESS, abis: AbiItem[] = ORDER_MANAGER_ABI as AbiItem[]) {
        this.w3store = w3store;
        this.address = address;
        this.abis = abis;
        makeObservable<this, "store" | "address">(this, {
            store: observable,
            address: observable,
        })
    }

    init(): Contract {
        if (!this.w3store.web3) throw new Error("Web3 is not initialized");
        return new this.w3store.web3.eth.Contract(this.abis, this.address)
    }
}