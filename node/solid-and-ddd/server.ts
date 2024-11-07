import { PostgresOrderRepository } from "./repositories/postgres/postgres-order-repository";
import { SubmitOrder } from "./use-cases/submit-order";

const repository = new PostgresOrderRepository()
const submitOrder = new SubmitOrder(repository)

submitOrder.execute({customerDocument: '12345678900', total: '100.00'})