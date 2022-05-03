import { makeAutoObservable, observable, reaction } from "mobx";
import Address from "../domain/Address";
import Chain from "../domain/Chain";
import ProviderState from "../domain/ProviderState";
import W3Store from "../domain/W3Store";
import ProviderRepo from "../repo/implementations/ProviderRepo";
import IProviderRepo from "../repo/IProviderRepo";


export default class ProviderStore {
    private static instance: ProviderStore;

    static getInstance(): ProviderStore {
        if (!ProviderStore.instance) {
            ProviderStore.instance = new ProviderStore();
        }
        return ProviderStore.instance;
    }
    
    repo: IProviderRepo;
    provider: MetaMaskInpageProvider | null = null;

    address: Address;
    chain: Chain;
    w3: W3Store;
    state: ProviderState;

    private constructor(repo?: IProviderRepo) {
        this.repo = repo || new ProviderRepo(this);
        this.address = new Address(this);
        this.chain = new Chain(this);
        this.w3 = new W3Store(this);
        this.state = new ProviderState(this);

        makeAutoObservable<this, "provider">(this, {
            provider: observable.ref,
        });
        reaction(() => this.provider, (p) => {
            if (p) {
                this.getAccounts();
                this.getChainId();
            }
        });
    }

    setProvider(provider: MetaMaskInpageProvider) {
        this.provider = provider;
    }

    async connect() {
        const addresses = await this.repo.connect();
        this.address.setAddress(...addresses);
    }

    async getProvider() {
        const provider = await this.repo.getProvider();
        this.setProvider(provider);
    }

    async getAccounts() {
        const accounts = await this.repo.getAccounts();
        this.address.setAddress(...accounts);
    }

    async getChainId() {
        const chainId = await this.repo.getChainId();
        this.chain.setChainId(chainId);
    }

    subscribeAddressChanged(callback: (...address: unknown[]) => void) {
        this.repo.subscribeAddressChanged(callback);
    }

    unsubscribeAddressChanged(callback: (...address: unknown[]) => void) {
        this.repo.unsubscribeAddressChanged(callback);
    }

    subscribeChainChanged(callback: (chain: unknown) => void) {
        this.repo.subscribeChainChanged(callback);
    }

    unsubscribeChainChanged(callback: (chain: unknown) => void) {
        this.repo.unsubscribeChainChanged(callback);
    }
}

export const providerStore = ProviderStore.getInstance();
