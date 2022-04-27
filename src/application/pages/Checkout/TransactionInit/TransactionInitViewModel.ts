import Amount from "core/modules/order/domain/Amount";
import Order from "core/modules/order/domain/Order";
import ProviderStore from "core/provider/store/ProviderStore";
import { create } from "domain";
import { useOrder } from "hooks";
import { makeAutoObservable } from "mobx";
import { useParams } from "react-router-dom";
import { start } from "repl";
import ITransactionInitViewModel from "./ITransactionInitViewModel";


export default class TransactionInitViewModel  implements ITransactionInitViewModel  {
    private _transaction: ITransaction;
    private _id: string = "";

    constructor(private readonly providerStore: ProviderStore)  {
        makeAutoObservable(this);

        {this._order, this._loaded, this._error} = useOrder(this._id);
    }

    get loaded(): boolean {
        return this._loaded;
    }

    get order(): Order|null {
        return this._order;
    }

    get id(): string {
        return this._id;
    }

    handleCreate(): () => {
        start();
        create({ amount: this._transaction.amount, seller: this._transaction.seller, this._id })
            .then(() => setTo(`/transaction/out/${id}/success/`))
            .catch(err => console.error(err))
            .finally(() => stop());
    }
}