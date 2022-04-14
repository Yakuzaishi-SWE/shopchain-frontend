

interface IProviderRepo {
    connect(): Promise<string[]>;
    getProvider(): Promise<MetaMaskInpageProvider>;
    getAccounts(): Promise<string[]>;
    getChainId(): Promise<string>;
    subscribeAddressChanged(callback: (...address: unknown[]) => void): void;
    unsubscribeAddressChanged(callback: (...address: unknown[]) => void): void;
    subscribeChainChanged(callback: (chain: unknown) => void): void;
    unsubscribeChainChanged(callback: (chain: unknown) => void): void;
}

export default IProviderRepo;