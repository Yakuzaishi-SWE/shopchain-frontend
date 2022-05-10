
interface IOrderDetailsViewModel {
    id: string,
    ownerAddress: string,
    sellerAddress: string,
    ftm: number,
    wei: number,
    state: string,
    date: string,
    isPaid: boolean,
    unlock(): void,
    refund(): void,
    back(route: string): string,
    isOwner: boolean,
    isSeller: boolean,
}

export default IOrderDetailsViewModel;