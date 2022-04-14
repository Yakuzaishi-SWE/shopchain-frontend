import W3Store from "../domain/W3Store";
import IContractRepo from "../repo/IContractRepo";
import MoneyBoxManagerContractRepo from "../repo/implementations/MoneyBoxManagerContractRepo";
import OrderManagerContract from "./OrderManagerContract";



export default class MoneyBoxManagerContract extends OrderManagerContract {
    constructor(w3store: W3Store, repo?: IContractRepo) {
        super(w3store, repo || new MoneyBoxManagerContractRepo(w3store));
    }
}