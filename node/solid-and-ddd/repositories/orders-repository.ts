import { Order } from "../domains/purchases/order";

export interface OrdersRepository {
  create: (order: Order) => Promise<void>
}