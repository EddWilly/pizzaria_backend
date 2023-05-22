import { test, expect } from 'vitest'
import { User } from './user'
import { Dish, DishProps } from '../dish/dish'
import { Ingredient, IngredientProps } from '../ingredient/ingredient'

test('Create an user', () => {
	//Arrange
	const newUserName = "Daniel Stewart"
	const newUserEmail = "danielstewart@gmail.com"
	const newUserPhone = "5938582935"
	const newUserAddress = "Rua Velha, n°60"
	const newUserFavoriteDishes = mockNewDishes()

	const newUserProps = {
		name: newUserName,
		address: newUserAddress,
		phone: newUserPhone,
		email: newUserEmail,
		favoriteDishes: newUserFavoriteDishes
	}

	//Act
	const user = new User(newUserProps)

	//Assert
	expect(user).toBeInstanceOf(User)
	expect(user.getName).toEqual(newUserName)
	expect(user.getAddress).toEqual(newUserAddress)
	expect(user.getPhone).toEqual(newUserPhone)
	expect(user.getEmail).toEqual(newUserEmail)
	expect(user.getFavoriteDishes).toEqual(newUserFavoriteDishes)
})

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