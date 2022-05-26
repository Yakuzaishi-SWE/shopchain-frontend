import { makeAutoObservable } from "mobx";
import Amount from "../../../../core/modules/order/domain/Amount";

jest.mock("core/modules/order/domain/Amount", () => {
    class Amount {
        FTM = 123;
        wei = 123;
        setAmountFTM = jest.fn();
    }
    return Amount;
});

const order = {
    sellerAddress: "0x123",
}