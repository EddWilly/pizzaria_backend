import { Dish, DishProps } from '../entities/dish/dish'
import { IngredientMocks } from './ingredient-mocks'
export class DishMocks {
	//Create dishes Props list
	mockManyDishes(): Dish[] {
		const ingredientMocker = new IngredientMocks
		
		const dishes: DishProps[] = [
			{
				name: "Pizza de Calabresa",
				price: 30.45,
				ingredients: ingredientMocker.mockManyIngredients(),
			},
			{
				name: "Pizza de Frango com Catupiry",
				price: 30.45,
				ingredients: ingredientMocker.mockManyIngredients(),
			},
			{
				name: "Pizza 4 queijos",
				price: 30.45,
				ingredients: ingredientMocker.mockManyIngredients(),
			},
		]
	
		const newDishes: Dish[] = []
	
		dishes.map((dishProps) => {
			const newDish = new Dish(dishProps)
			newDishes.push(newDish)
		})

		return newDishes
	}

  mockDish(): Dish {
		const ingredientMocker = new IngredientMocks
		
		const dishProps: DishProps = {
			name: "Pizza de Calabresa",
			price: 30.45,
			ingredients: ingredientMocker.mockManyIngredients(),
		}
		const newDish = new Dish(dishProps)
		return newDish
	} 
}