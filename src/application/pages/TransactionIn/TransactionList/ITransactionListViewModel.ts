import Order from "core/modules/order/domain/Order";

interface ITransactionListViewModel {
    stateFilter: string,
    typeFilter: string,
    filtered_transactions: Order[],
    setStateFilter(filter: string): void,
    setTypeFilter(filter: string): void,
}

export default ITransactionListViewModel;