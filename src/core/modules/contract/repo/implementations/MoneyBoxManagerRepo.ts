import MoneyBoxManagerContract from "core/provider/contracts/MoneyBoxManagerContract";
import { Contract } from "web3-eth-contract";
import IMoneyBoxManagerRepo from "../IMoneyBoxManagerRepo";
import OrderManagerRepo from "./OrderManagerRepo";

export default class MoneyBoxManagerRepo extends OrderManagerRepo implements IMoneyBoxManagerRepo {
    constructor(contract: MoneyBoxManagerContract) {
        super(contract);
    }
}