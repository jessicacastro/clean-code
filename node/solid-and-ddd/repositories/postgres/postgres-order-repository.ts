import { Order } from "../../domains/purchases/order";
import { OrdersRepository } from "../orders-repository";

export class PostgresOrderRepository implements OrdersRepository {
  async create(order: Order): Promise<void> {
    // Save order in database
    console.log('Order created in Postgres:', order)
  }
}