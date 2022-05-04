

interface IPickAmountViewModel {
    initFTM: number;
    setInitFTM(value: number): void;
    initWei:  number
    createMoneyBox(): void;
    back(): string;
}

export default IPickAmountViewModel;