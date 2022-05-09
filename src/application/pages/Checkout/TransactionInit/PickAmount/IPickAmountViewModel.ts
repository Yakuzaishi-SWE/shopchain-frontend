

interface IPickAmountViewModel {
    initFTM: number;
    setInitFTM(value: number): void;
    initWei:  number
    createMoneyBox(): boolean,
    isBusy: boolean;
    id: string;
    canRedirect: boolean;
    amountFtm: number;
}

export default IPickAmountViewModel;