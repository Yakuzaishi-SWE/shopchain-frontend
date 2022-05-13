import { AbiItem } from "web3-utils";
import W3Store from "../../domain/W3Store";
import IContractRepo from "../IContractRepo";
import MONEYBOX_MANAGER_ABI from "./MoneyBoxManagerContractABI.json";
import OrderManagerContractRepo from "./OrderManagerContractRepo";


// const ORDER_MANAGER_ADDRESS = "0x4904D51AB0B8135510A6eD60D2Cc52Fb54B44986"; first
// const ORDER_MANAGER_ADDRESS = "0x2ED62B4B5B1212044EFdC325A1ce1f061e7668C2"; second
// const ORDER_MANAGER_ADDRESS = "0x0fb49e06F0F02DE6d5E5b85E39502162a876ED6D";
const ORDER_MANAGER_ADDRESS = "0xf3D9a34557792ca1fBBC543f6bE67E9a4714B977";

export default class MoneyBoxManagerContractRepo extends OrderManagerContractRepo implements IContractRepo {
    constructor(store: W3Store) {
        super(store, ORDER_MANAGER_ADDRESS, MONEYBOX_MANAGER_ABI as AbiItem[]);
    }
}