import { providerStore } from "core/provider/store/ProviderStore";
import IMoneyBoxManagerRepo from "../repo/IMoneyBoxManagerRepo";
import MoneyBoxManagerRepo from "../repo/implementations/MoneyBoxManagerRepo";
import OrderManager from "./OrderManager";



export default class MoneyBoxManager extends OrderManager {
    declare protected readonly repo: IMoneyBoxManagerRepo;

    constructor(repo?: IMoneyBoxManagerRepo) {
        super(repo || new MoneyBoxManagerRepo(providerStore.w3.mm));
    }
}