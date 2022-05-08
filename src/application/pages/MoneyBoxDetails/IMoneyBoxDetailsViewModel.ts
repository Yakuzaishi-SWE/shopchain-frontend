import Payment from "core/modules/order/domain/Payment";

interface IMoneyBoxDetailsViewModel {
  id: string,
  ownerAddress: string,
  sellerAddress: string,
  ftm: number,
  wei: number,
  filledFtm: number,
  filledWei: number,
  ftmToFill: number,
  weiToFill: number,
  state: string,
  isPaid: boolean,
  isUnlocked: boolean,
  isRefunded: boolean,
  unlock(): void,
  refund(): void,
  feeAmountFtm: number,
  feeAmountWei: number,
  setFeeAmount(newAmount: number): void, 
  newPayment(): boolean,
  partecipants: Payment[],
  dateNtime(partecipant: Payment): string,
  back(route: string): string,
}
export default IMoneyBoxDetailsViewModel;