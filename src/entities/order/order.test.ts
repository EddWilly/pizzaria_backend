import { test, expect } from 'vitest'
import { Order } from './order'
import { Dish, DishProps } from '../dish/dish'
import { Ingredient, IngredientProps } from '../ingredient/ingredient'
import { Drink, DrinkProps } from '../drink/drink'

function mockIngredients (): Ingredient[] {
//Create ingredients props list
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

	const dishIngredients: Ingredient[] = []

	ingredients.map((ingredientProps) => {
		//For each ingredientProps in ingredients, create a new ingredient using the current ingredientProp
		const newIngredient = new Ingredient(ingredientProps)
		//Then insert the new instantiated ingretiend to the dishIngredients array
		dishIngredients.push(newIngredient)
	})

	return dishIngredients
}

function mockNewDishes (): Dish[] {
	
	//Create dishes Props list
	const dishes: DishProps[] = [
		{
			name: "Pizza de Calabresa",
			price: 30.45,
			ingredients: mockIngredients(),
		},
	]

	const newDishes: Dish[] = []

	dishes.map((dishProps) => {
		const newDish = new Dish(dishProps)
		newDishes.push(newDish)
	})

	return newDishes
}

function mockNewDrinks (): Drink[] {
	//Create drink props list
	const drinksProps: DrinkProps[] = [
		{
			name: "Skol 250ml",
			price: 5.60,
			available: true
		},
		{
			name: "Guaraná 250ml",
			price: 7.60,
			available: true
		},
	]

	const drinks: Drink[] = []

	drinksProps.map((drinkProps) => {
		const newDrink = new Drink(drinkProps)
		drinks.push(newDrink)
	})

	return drinks
}

test('Create an order', () => {
	//Arrange
	const newOrderOrderedAt = new Date()
	const newOrderPrice = 75.70
	const newOrderCustomer = "Roberto Paiva"
	const newOrderAddress = "Rua Nova n°75"
	const newOrderOrderedDishes = mockNewDishes()
	const newOrderOrderedDrinks = mockNewDrinks()

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