import { makeAutoObservable, observable, reaction, runInAction } from "mobx";
import { runInContext } from "vm";
import Address from "../domain/Address";
import Chain from "../domain/Chain";
import ProviderState from "../domain/ProviderState";
import W3Store from "../domain/W3Store";
import ProviderRepo from "../repo/implementations/ProviderRepo";
import IProviderRepo from "../repo/IProviderRepo";


export default class ProviderStore {
    private static instance: ProviderStore;

    static getInstance(repo?: IProviderRepo): ProviderStore {
        if (!ProviderStore.instance) {
            ProviderStore.instance = new ProviderStore(repo);
        }
        return ProviderStore.instance;
    }

    repo: IProviderRepo;
    provider: MetaMaskInpageProvider | null = null;

    address: Address;
    chain: Chain;
    w3: W3Store;
    state: ProviderState;

    constructor(repo?: IProviderRepo) {
        this.repo = repo || new ProviderRepo(this);
        this.address = new Address(this);
        this.chain = new Chain(this);
        this.w3 = new W3Store(this);
        this.state = new ProviderState(this);

        makeAutoObservable(this, {
            provider: observable.ref,
        });

        reaction(() => this.provider, (p) => {
            if (p) {
                console.log("Provider connected");
                this.getAccounts();
                this.getChainId();
            }
        });
    }

    async connect() {
        const addresses = await this.repo.connect();
        this.subscribeAddressChanged(this.address.setAddress);
        this.address.setAddress(addresses);
    }

    async getProvider() {
        const provider = await this.repo.getProvider();
        runInAction(() => {
            this.provider = provider;
            this.subscribeAddressChanged(this.address.setAddress);
            this.subscribeChainChanged(this.chain.setChainId);
        });
    }

    async getAccounts() {
        const accounts = await this.repo.getAccounts();
        this.address.setAddress(accounts);
    }

    async getChainId() {
        const chainId = await this.repo.getChainId();
        this.chain.setChainId(chainId);
    }

    subscribeAddressChanged(callback: (address: unknown[]) => void) {
        this.repo.subscribeAddressChanged(callback);
    }

    subscribeChainChanged(callback: (chain: unknown) => void) {
        this.repo.subscribeChainChanged(callback);
    }
}

export const providerStore = ProviderStore.getInstance();
