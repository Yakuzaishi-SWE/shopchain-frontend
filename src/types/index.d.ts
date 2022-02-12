type MetaMaskInpageProvider = import("@metamask/providers").MetaMaskInpageProvider;

declare global {
    interface Window {
        ethereum: MetaMaskInpageProvider;
    }
}

declare interface IOrder {
    sellerAddress: string,
    ownerAddress: string,
    amount: number,
    unlockCode: number,
    state: OrderState
}

declare interface IOrderTuple {
    id: string,
    order: IOrder,
}

declare interface ITransaction {
    seller: string,
    amount: string,
}