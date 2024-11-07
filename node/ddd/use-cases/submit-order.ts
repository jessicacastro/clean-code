import { Order } from "../domains/purchases/order"

interface SubmitOrderRequest {
  customerDocument: string
  total: string
}

export class SubmitOrder {
  constructor() {}

  execute({customerDocument, total}: SubmitOrderRequest) {
    const order = new Order(customerDocument, parseFloat(total))

    // Save order in database
  }
}