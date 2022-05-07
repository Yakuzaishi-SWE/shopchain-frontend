import { makeAutoObservable } from "mobx";
import PaymentDTO from "../dtos/PaymentDTO";
import Amount from "./Amount";

type PaymentProps = {
    from: string;
    amount: Amount;
    timestamp: number;
}

export default class Payment {
    props: PaymentProps;

    constructor(props: PaymentProps) {
        this.props = props;
        makeAutoObservable(this);
    }

    get from() {
        return this.props.from;
    }

    isFrom(address: string) {
        return this.from === address;
    }

    get amount() {
        return this.props.amount;
    }

    get timestamp() {
        return this.props.timestamp;
    }

    static create(props: PaymentDTO) {
        return new Payment({
            timestamp: props.timestamp,
            from: props.from,
            amount: Amount.create(props.amount),
        });
    }
}