import { Order } from "../entities/order/order";

export interface OrdersRepository {
    create(order: Order): Promise<void>
    
}