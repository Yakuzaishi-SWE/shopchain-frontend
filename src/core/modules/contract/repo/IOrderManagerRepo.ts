

interface IOrderManagerRepo {
    getContractBalance(): Promise<number | undefined>;
    getOrderCount(): Promise<number | undefined>;
}

export default IOrderManagerRepo;