import { OrderStateEnum } from "types/enums";

interface OrderDTO {
    sellerAddress: string,
    ownerAddress: string,
    amount: number,
    unlockCode: number,
    state: OrderStateEnum,
    timestamp: number,
}

export default OrderDTO;