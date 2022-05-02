

interface IPickAmountViewModel {
    amount: number;
    setFTM(value: number): void;
    wei:  number
    createMoneyBox(): void;
}

export default IPickAmountViewModel;