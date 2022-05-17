import MoneyBox from "core/modules/order/domain/MoneyBox";
import Payment from "core/modules/order/domain/Payment";

interface IContributesListViewModel {
    moneyBoxesContributed: MoneyBox[],
    getContributesFromMoneyBox(moneybox: MoneyBox): Payment[],
    dateNtime(contribute: Payment): string,
}

export default IContributesListViewModel;