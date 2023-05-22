//Todo caso de uso tem uma ENTRADA e uma SAÍDA

import { Dish } from '../entities/dish/dish'
import { Drink } from '../entities/drink/drink'
import { Order } from '../entities/order/order'
import { OrdersRepository } from '../repositories/orders-repository'

interface CreateOrderRequest {
	orderedAt: Date,
	price: number,
	customer: string,
	address: string,
	orderedDishes: Dish[],
	orderedDrinks: Drink[]
}

type CreateOrderResponse = Order

export class CreateOrder {
	constructor (
		private ordersRepository: OrdersRepository
	) {}

	async execute({ 
		orderedAt, 
		price, 
		customer, 
		address, 
		orderedDishes, 
		orderedDrinks 
	}: CreateOrderRequest): Promise<CreateOrderResponse> {
		const order = new Order ({
			orderedAt, 
			price,
			customer, 
			address, 
			orderedDishes, 
			orderedDrinks
		})

		await this.ordersRepository.create(order)
		return order
	}
}