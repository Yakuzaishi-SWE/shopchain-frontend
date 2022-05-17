import Decimal from "decimal.js";
import { OrderStateEnum } from "types/enums";

export const WeitoFTM = (wei: number, precision = 18) => new Decimal(wei).div(1e18).toFixed(precision).replace(/0*$/, "").replace(/\.$/, "");

export const FTMtoWei = (FTM: Decimal) => FTM.mul(1e18).toNumber();

export const OrderStateToStr: {[key in OrderStateEnum]: string} = {
    [OrderStateEnum.NOT_CREATED]: "Not Created",
    [OrderStateEnum.CREATED]: "Created",
    [OrderStateEnum.FILLED]: "Paid",
    [OrderStateEnum.CLOSED]: "Unlocked",
    [OrderStateEnum.CANCELLED]: "Refunded"
};