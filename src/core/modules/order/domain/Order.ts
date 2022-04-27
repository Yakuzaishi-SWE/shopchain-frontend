import { computed, makeObservable, observable } from "mobx";
import OrderDTO from "../dtos/OrderDTO";
import OrderStore from "../store/OrderStore";
import Amount from "./Amount";
import OrderState from "./OrderState";

export type OrderProps = {
    sellerAddress: string,
    ownerAddress: string,
    amount: Amount,
    unlockCode: number,
    state: OrderState
};

export default class Order {
    protected readonly store: OrderStore;

    id: string;
    props: OrderProps;

    constructor(store: OrderStore, id: string, props: OrderProps) {
        this.store = store;
        this.id = id;
        this.props = props;
        makeObservable<this, "store">(this, {
            store: observable,
            id: observable,
            props: observable,
            sellerAddress: computed,
            ownerAddress: computed,
            amount: computed,
            unlockCode: computed,
            state: computed,
            type: computed,
        });
    }

    static create(store: OrderStore, id: string, props: OrderDTO) {
        const amount = new Amount(props.amount);
        const state = new OrderState(props.state);

        return new Order(
            store,
            id, {
            ...props,
            amount: amount,
            state: state,
        });
    }

    async unlock(code: number): Promise<void> {
        await this.store.unlock(this.id, code);
    }

    async refund(): Promise<void> {
        await this.store.refund(this.id);
    }

    /***********************
     *       GET/SET
     **********************/

    get type(): string {
        return "ORDER";
    }

    get sellerAddress(): string {
        return this.props.sellerAddress;
    }

    get ownerAddress(): string {
        return this.props.ownerAddress;
    }

    get amount(): Amount {
        return this.props.amount;
    }

    get unlockCode(): number {
        return this.props.unlockCode;
    }

    get state(): OrderState {
        return this.props.state;
    }

    set state(state: OrderState) {
        this.props.state = state;
    }

    update(other: Order) {
        this.state = other.state;
    }
}