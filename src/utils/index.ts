import Decimal from "decimal.js";
import { OrderState } from "types/enums";

export const WeitoFTM = (wei: number, precision = 18) => new Decimal(wei).div(1e18).toFixed(precision).replace(/0*$/, "").replace(/\.$/, "");

export const FTMtoWei = (FTM: Decimal) => FTM.mul(1e18).toNumber();

export const OrderStateToStr: {[key in OrderState]: string} = {
    [OrderState.NOT_CREATED]: "Not Created",
    [OrderState.CREATED]: "Created",
    [OrderState.FILLED]: "Paid",
    [OrderState.CLOSED]: "Unlocked",
    [OrderState.CANCELLED]: "Refunded"
};