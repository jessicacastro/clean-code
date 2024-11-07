import { Order } from "../domains/purchases/order"
import { OrdersRepository } from "../repositories/orders-repository"

interface SubmitOrderRequest {
  customerDocument: string
  total: string
}

export class SubmitOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({customerDocument, total}: SubmitOrderRequest) {
    const order = new Order(customerDocument, parseFloat(total))

    // Save order in database
    await this.ordersRepository.create(order)
  }
}