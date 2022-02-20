import Decimal from "decimal.js";

export const formatFTM = (wei: number) => new Decimal(wei).div(1e18).toFixed(18).replace(/0*$/, "");
