type MetamaskErrorSeverity = import("./enums").MetamaskErrorSeverity;
type MetamaskErrorName = import("./enums").MetamaskErrorName;
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

// declare interface IPaymentTuple {
//     moneyboxId: string,
//     payments: Payment[],
// }

declare interface ITransaction {
    seller: string,
    amount: string,
}

declare interface MetamaskError {
    severity: MetamaskErrorSeverity,
    name: MetamaskErrorName,
    description: string,
}