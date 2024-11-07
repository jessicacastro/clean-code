export class Order {
  private customerDocument: string
  private total: number
  private createdAt: Date

  constructor(customerDocument: string, total: number) {
    this.customerDocument = customerDocument
    this.total = total
    this.createdAt = new Date()
  }
}