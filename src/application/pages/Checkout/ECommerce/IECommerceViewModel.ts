
interface IECommerceViewModel {
    amount: number;
    wei: number;
    id: string;
    setId: (val: string) => void,
    setAmount: (val: number) => void,
    handleSubmit: () => void;
    redirectLink: string|null;
}

export default IECommerceViewModel;