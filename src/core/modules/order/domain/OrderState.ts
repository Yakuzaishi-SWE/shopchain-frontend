import { makeAutoObservable } from "mobx";
import { OrderStateEnum } from "types/enums";

const OrderStateToStr: {[key in OrderStateEnum]: string} = {
    [OrderStateEnum.NOT_CREATED]: "Not Created",
    [OrderStateEnum.CREATED]: "Created",
    [OrderStateEnum.FILLED]: "Paid",
    [OrderStateEnum.CLOSED]: "Unlocked",
    [OrderStateEnum.CANCELLED]: "Refunded"
};

export default class OrderState {
    private state: string;

    constructor(state: string) {
        this.state = state;
        makeAutoObservable(this);
    }

    get isNotCreated() {
        return this.state === OrderStateEnum.NOT_CREATED;
    }

    get isCreated() {
        return this.state === OrderStateEnum.CREATED;
    }

    get isPaid() {
        return this.state === OrderStateEnum.FILLED;
    }

    get isClosed() {
        return this.state === OrderStateEnum.CLOSED;
    }

    get isCancelled() {
        return this.state === OrderStateEnum.CANCELLED;
    }

    toString() {
        return OrderStateToStr[this.state];
    }

    setState(state: string) {
        this.state = state;
    }
}