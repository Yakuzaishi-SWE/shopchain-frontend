
interface IECommerceViewModel {
    amount: number;
    wei: number;
    id: string;
    setAmount: (val: number) => void;
    handleSubmit: () => void;
}

export default IECommerceViewModel;