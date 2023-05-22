import { expect, test } from 'vitest'
import { Dish } from './dish'
import { Ingredient, IngredientProps } from '../ingredient/ingredient'

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

test('Create a dish', () => {
    //Arrange
    const newDishName = 'Maria Bonita'
    const newDishPrice = 32.30
    const newDishIgredients = mockIngredients()

    //Act
    const dish = new Dish({
        name: newDishName,
        price: newDishPrice,
        ingredients: newDishIgredients
    })

    //Assert
    expect(dish).toBeInstanceOf(Dish)
    expect(dish.getName).toEqual(newDishName)
    expect(dish.getPrice).toEqual(newDishPrice)
    expect(dish.getIngredients).toEqual(newDishIgredients)
})