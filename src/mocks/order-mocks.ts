import { Order } from "../entities/order/order"
import { DishMocks } from "./dish-mocks"
import { DrinkMocks } from "./drink-mocks"

export class OrderMocks {
	mockOrder(): Order {
		const dishMocker = new DishMocks
		const drinkMocker = new DrinkMocks
		
		const orderProps = {
			orderedAt: new Date,
			price: 64.50,
			customer: "Jean Carlos",
			address: "Rua da Estrela n°23",
			orderedDishes: dishMocker.mockManyDishes(),
			orderedDrinks: drinkMocker.mockManyDrinks()
		}

		const order = new Order(orderProps)

		return order
	}
}