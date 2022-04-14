import { OrderStateEnum } from "types/enums";
import OrderState from "../OrderState";


describe("OrderState class", () => {

    it("test OrderState constructor", () => {
        const state = new OrderState(OrderStateEnum.NOT_CREATED);
        expect(state.toString()).toStrictEqual("Not Created");
    })

    it("isNotCreated", () => {
        const state = new OrderState(OrderStateEnum.NOT_CREATED);
        expect(state.isNotCreated).toStrictEqual(true);
    })

    it("isCreated", () => {
        const state = new OrderState(OrderStateEnum.CREATED);
        expect(state.isCreated).toStrictEqual(true);
    })

    it("isPaid", () => {
        const state = new OrderState(OrderStateEnum.FILLED);
        expect(state.isPaid).toStrictEqual(true);
    })

    it("isClosed", () => {
        const state = new OrderState(OrderStateEnum.CLOSED);
        expect(state.isClosed).toStrictEqual(true);
    })

    it("isCancelled", () => {
        const state = new OrderState(OrderStateEnum.CANCELLED);
        expect(state.isCancelled).toStrictEqual(true);
    })

    it("setState", () => {
        const state = new OrderState(OrderStateEnum.CREATED);

        state.setState(OrderStateEnum.FILLED);
        expect(state.isPaid).toStrictEqual(true);
    })
})