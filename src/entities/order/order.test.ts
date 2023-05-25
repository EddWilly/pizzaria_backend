import { test, expect } from 'vitest'
import { Order } from './order'
import { DishMocks } from '../../mocks/dish-mocks'
import { DrinkMocks } from '../../mocks/drink-mocks'

test('Create an order', () => {
	const dishMocker = new DishMocks
	const drinkMocker = new DrinkMocks
	//Arrange
	const newOrderOrderedAt = new Date()
	const newOrderPrice = 75.70
	const newOrderCustomer = "Roberto Paiva"
	const newOrderAddress = "Rua Nova n°75"
	const newOrderOrderedDishes = dishMocker.mockManyDishes()
	const newOrderOrderedDrinks = drinkMocker.mockManyDrinks()

	const newOrder = {
		orderedAt: newOrderOrderedAt,
		price: newOrderPrice,
		customer: newOrderCustomer,
		address: newOrderAddress,
		orderedDishes: newOrderOrderedDishes,
		orderedDrinks: newOrderOrderedDrinks
	}

	//Act
	const order = new Order(newOrder)

	//Assert
	expect(order).toBeInstanceOf(Order)
	expect(order.getOrderedAt).toEqual(newOrderOrderedAt)
	expect(order.getPrice).toEqual(newOrderPrice)
	expect(order.getCustomer).toEqual(newOrderCustomer)
	expect(order.getAddress).toEqual(newOrderAddress)
})