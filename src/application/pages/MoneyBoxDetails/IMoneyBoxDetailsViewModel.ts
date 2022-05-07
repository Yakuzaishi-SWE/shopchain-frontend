import Payment from "core/modules/order/domain/Payment";

interface IMoneyBoxDetailsViewModel {
  id: string,
  ownerAddress: string,
  sellerAddress: string,
  ftm: number,
  wei: number,
  getFilledFtm: number,
  getFilledWei: number,
  getFtmToFill: number,
  getWeiToFill: number,
  state: string,
  isPaid: boolean,
  isUnlocked: boolean,
  isRefunded: boolean,
  unlock(): void,
  refund(): void,
  feeAmountFTM: number,
  feeAmountWei: number,
  setFeeAmount(newAmount: number): void, 
  newPayment(): void,
  partecipants: Payment[],
  dateNtime(partecipant: Payment): string,
  back(route: string): string,
}
export default IMoneyBoxDetailsViewModel;