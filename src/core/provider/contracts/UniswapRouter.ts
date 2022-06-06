import { computed, makeObservable, observable } from "mobx";
import W3Store from "../domain/W3Store";
import UniswapRouterRepo from "../repo/implementations/UniswapRouterRepo";

const WFTM_ADDRESS = "0xf1277d1Ed8AD466beddF92ef448A132661956621";
const USDT_ADDRESS = "0xA70A572aa5489a5CDd0dAA3bF0Cf440A92f50402";

export default class UniswapRouter {
    private readonly w3store: W3Store;
    protected readonly repo: UniswapRouterRepo;

    constructor(w3store: W3Store, repo?: UniswapRouterRepo) {
        this.w3store = w3store;
        this.repo = repo || new UniswapRouterRepo(w3store);
        makeObservable<this, "w3store">(this, {
            w3store: observable,
            instance: computed,
            path: computed,
        });
    }

    get instance() {
        if (!this.w3store.web3) return null;
        else return this.repo.init();
    }

    get path(): string[] {
        return [WFTM_ADDRESS, USDT_ADDRESS];
    }
}