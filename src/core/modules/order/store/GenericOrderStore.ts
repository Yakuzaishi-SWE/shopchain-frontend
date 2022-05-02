import ComputedTask from "core/utils/ComputedTask";
import Order from "../domain/Order";
import OrderCollection from "../domain/OrderCollection";


interface GenericOrderStore<T extends Order = Order> {
    readonly orders: OrderCollection<T>;
    readonly getOrderById: (id: string) => ComputedTask<T | null, [id: string], T | null>;
}