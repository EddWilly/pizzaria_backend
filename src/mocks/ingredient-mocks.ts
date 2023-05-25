import { Ingredient, IngredientProps } from "../entities/ingredient/ingredient"

export class IngredientMocks {
	mockManyIngredients (): Ingredient[] {
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
		
}