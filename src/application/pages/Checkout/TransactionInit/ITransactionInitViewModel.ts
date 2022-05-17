interface ITransactionInitViewModel {
    id: string,
    ftm: number,
    wei: number,
    sellerAddress: string,
    createOrder(): void,
    createMoneyBox(): void,
}

export default ITransactionInitViewModel;