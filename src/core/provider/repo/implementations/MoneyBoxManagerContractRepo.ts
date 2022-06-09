import { AbiItem } from "web3-utils";
import W3Store from "../../domain/W3Store";
import IContractRepo from "../IContractRepo";
import MONEYBOX_MANAGER_ABI from "./MoneyBoxManagerContractABI.json";
import OrderManagerContractRepo from "./OrderManagerContractRepo";


const ORDER_MANAGER_ADDRESS = "0x8B9BaE8C85B1d3a0ff6f13845359E9C78efC8d7C";
// const ORDER_MANAGER_ADDRESS = "0xf3D9a34557792ca1fBBC543f6bE67E9a4714B977";

export default class MoneyBoxManagerContractRepo extends OrderManagerContractRepo implements IContractRepo {
    constructor(store: W3Store) {
        super(store, ORDER_MANAGER_ADDRESS, MONEYBOX_MANAGER_ABI as AbiItem[]);
    }
}