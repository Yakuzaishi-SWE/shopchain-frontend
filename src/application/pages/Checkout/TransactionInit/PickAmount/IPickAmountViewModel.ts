

interface IPickAmountViewModel {
    amount: number;
    setInitFTM(value: number): void;
    wei:  number
    createMoneyBox(): void;
}

export default IPickAmountViewModel;