

interface IPickAmountViewModel {
    initFTM: number;
    setInitFTM(value: number): void;
    initWei:  number
    createMoneyBox(): void;
    back(): string;
    id: string;
}

export default IPickAmountViewModel;