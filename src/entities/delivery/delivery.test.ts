import { test, expect } from 'vitest'
import { Delivery } from './delivery'
import { Order } from '../order/order'
import { Dish, DishProps } from '../dish/dish'
import { Drink, DrinkProps } from '../drink/drink'
import { Ingredient, IngredientProps } from '../ingredient/ingredient'


function mockNewOrderData (): Order {

	const ingredients: IngredientProps[] = [{
		name: "Salsa",
		price: 4,
		available: true
	}, 
	{
		name: "Queijo",
		price: 5,
		available: true
	}, 
	{
		name: "Tomate",
		price: 5,
		available: true
	},
	{
		name: "Pimentão",
		price: 5,
		available: true
	},]

	const defaultDishIgredients: Ingredient[] = []

	ingredients.map((ingredient) => {
		const newIngredient = new Ingredient(ingredient)
		defaultDishIgredients.push(newIngredient)
	})
	//Define Dish props
	const defaultDishProps: DishProps = {
		name: "4 Queijos",
		price: 40.50,
		ingredients: defaultDishIgredients,
	}
	//Define Drink props
	const defaultDrinkProps: DrinkProps = {
		name: "Guaraná 1L",
		price: 7.50,
		available: true
	}
	//Instantiate new Dish and new Drink
	const defaultDish = new Dish(defaultDishProps)
	const defaultDrink = new Drink(defaultDrinkProps)
	
	const defaultDishArray = [defaultDish]
	const defaultDrinkArray = [defaultDrink]
	
	const defaultOrderProps = {
		orderedAt: new Date,
		price: 64.50,
		customer: "Jean Carlos",
		address: "Rua da Estrela n°23",
		orderedDishes: defaultDishArray,
		orderedDrinks: defaultDrinkArray
	}

	const defaultOrder = new Order(defaultOrderProps)

	return defaultOrder
}
//Data to use within tests


test('Create a delivery', () => {
	//Arrange
	const newDeliveryRelatedOrder = mockNewOrderData()
	const newDeliveryOrderedAt = new Date()
	const newDeliveryDeliveredAt = new Date()
	//Set delivery time to be ONE hour later to the order time
	newDeliveryDeliveredAt.setHours(new Date().getHours() + 1)

	const newDeliveryProps = {
		orderedAt: newDeliveryOrderedAt,
		deliveredAt: newDeliveryDeliveredAt,
		order: newDeliveryRelatedOrder
	}

	//Act
	const delivery = new Delivery(newDeliveryProps)

	//Assert
	expect(delivery).toBeInstanceOf(Delivery)
	expect(delivery.getOrder).toBeInstanceOf(Order)
	expect(delivery.getOrderedAt).toEqual(newDeliveryOrderedAt)
	expect(delivery.getDeliveredAt).toEqual(newDeliveryDeliveredAt)
	expect(delivery.getOrder).toEqual(newDeliveryRelatedOrder)
})