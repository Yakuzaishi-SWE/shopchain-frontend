type MetaMaskInpageProvider = import("@metamask/providers").MetaMaskInpageProvider;

declare global {
    interface Window {
        ethereum: MetaMaskInpageProvider;
    }
}
