import Payment from "core/modules/order/domain/Payment";

interface ITransactionDetailsViewModel {
  id: string,
  ownerAddress: string,
  sellerAddress: string,
  ftm: number,
  wei: number,
  getFilledFtm(): Promise<number>,
  getFilledWei(): Promise<number>,
  getFtmToFill(): Promise<number>,
  getWeiToFill(): Promise<number>,
  state: string,
  isPaid: boolean,
  unlock(): void,
  refund(): void,
  partecipants: Payment[],
}
export default ITransactionDetailsViewModel;