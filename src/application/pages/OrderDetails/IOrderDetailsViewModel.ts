
interface IOrderDetailsViewModel {
    id: string,
    ownerAddress: string,
    sellerAddress: string,
    ftm: number,
    wei: number,
    state: string,
    date: string,
    isPaid: boolean,
    unlock(): boolean,
    refund(): boolean,
    back(route: string): string,
    isOwner: boolean,
    isSeller: boolean,
    unlockCode: number,
    setCode(code: number): void,
    code: number,
    isBusy: boolean,
    canReload: boolean,
}

export default IOrderDetailsViewModel;