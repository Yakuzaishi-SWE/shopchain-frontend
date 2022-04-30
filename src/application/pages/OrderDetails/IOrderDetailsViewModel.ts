
interface IOrderDetailsViewModel {
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
export default IOrderDetailsViewModel;