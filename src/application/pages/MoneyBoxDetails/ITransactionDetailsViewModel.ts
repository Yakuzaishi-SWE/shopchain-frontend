import Amount from "core/modules/order/domain/Amount";
import OrderState from "core/modules/order/domain/OrderState";

interface ITransactionDetailsViewModel {
  id: string,
  ownerAddress: string,
  sellerAddress: string,
  ftm: number,
  wei: number,
  state: string,
  isPaid: boolean,
  unlock(): void,
  refund(): void,
}
export default ITransactionDetailsViewModel;