import Amount from "core/modules/order/domain/Amount";
import OrderState from "core/modules/order/domain/OrderState";

interface ITransactionDetailsViewModel {
  id: string,
  ownerAddress: string,
  sellerAddress: string,
  amount: number,
  state: string,
  isPaid(): boolean,
}
export default ITransactionDetailsViewModel;