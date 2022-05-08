

interface IPickAmountViewModel {
    initFTM: number;
    setInitFTM(value: number): void;
    initWei:  number
    createMoneyBox(): boolean;
    id: string;
    canRedirect: boolean;
    amountFtm: number;
}

export default IPickAmountViewModel;