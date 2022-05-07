

interface IPickAmountViewModel {
    initFTM: number;
    setInitFTM(value: number): void;
    initWei:  number
    createMoneyBox(): void;
    id: string;
    canRedirect: boolean;
    amountFtm: number;
}

export default IPickAmountViewModel;