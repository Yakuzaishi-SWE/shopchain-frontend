import Payment from "core/modules/order/domain/Payment";

interface IContributesListViewModel {
    contributes: Payment[],
    dateNtime(contribute: Payment): string,
}

export default IContributesListViewModel;