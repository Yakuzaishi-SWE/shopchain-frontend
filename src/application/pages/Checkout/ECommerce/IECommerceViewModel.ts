
interface IECommerceViewModel {
    amount: number;
    wei: number;
    id: string;
    setAmount: (val: number) => void;
    handleSubmit: () => void;
    redirectLink: string;
}

export default IECommerceViewModel;