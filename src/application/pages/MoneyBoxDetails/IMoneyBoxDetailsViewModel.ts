import Payment from "core/modules/order/domain/Payment";

interface IMoneyBoxDetailsViewModel {
  id: string,
  ownerAddress: string,
  sellerAddress: string,
  usdt: number,
  filledUsdt: number,
  usdtToFill: number,
  state: string,
  isPaid: boolean,
  isUnlocked: boolean,
  isRefunded: boolean,
  date: string,
  unlock(): boolean,
  refund(): boolean,
  feeAmountFtm: number,
  setFeeAmount(newAmount: number): void, 
  newPayment(): boolean,
  partecipants: Payment[],
  dateNtime(partecipant: Payment): string,
  // back(route: string): string,
  isOwner: boolean,
  isSeller: boolean,
  isBusy: boolean,
  unlockCode: number,
  code: number,
  setCode(code: number): void,
  canReload: boolean,
}
export default IMoneyBoxDetailsViewModel;