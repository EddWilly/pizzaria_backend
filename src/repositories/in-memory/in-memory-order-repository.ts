import { Order } from "../../entities/order/order";
import { OrdersRepository } from "../orders-repository";

export class InMemoryOrdersRepository implements OrdersRepository {
	public items: Order[] = []
	
	async create(order: Order): Promise<void> {
		this.items.push(order)
	}

}