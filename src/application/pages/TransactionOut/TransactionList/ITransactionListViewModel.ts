import Order from "core/modules/order/domain/Order";

interface ITransactionListViewModel {
    // transactions: Order[],
    stateFilter: string,
    typeFilter: string,
    transactionsFilter(stateFilter: string, typeFilter: string): Order[],
    setStateFilter(filter: string): void,
    setTypeFilter(filter: string): void,
}

export default ITransactionListViewModel;