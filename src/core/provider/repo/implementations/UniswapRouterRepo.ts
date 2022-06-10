import W3Store from "../../domain/W3Store";
import { Contract } from "web3-eth-contract";
import { makeObservable, observable } from "mobx";
import UNISWAP_ROUTER_ABI from "./UniSwapRouterABI.json";
import { AbiItem } from "web3-utils";
import IContractRepo from "../IContractRepo";

const UNISWAP_ROUTER_ADDRESS = "0xa6AD18C2aC47803E193F75c3677b14BF19B94883";

export default class UniswapRouterRepo implements IContractRepo {
    private readonly w3store: W3Store;
    private readonly address: string;
    private readonly abis: AbiItem[];

    constructor(w3store: W3Store) {
        this.w3store = w3store;
        this.address = UNISWAP_ROUTER_ADDRESS;
        this.abis = UNISWAP_ROUTER_ABI as AbiItem[];
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