import { test, expect } from 'vitest'
import { Ingredient } from './ingredient'

test('Create an ingredient', () => {
    //Arrange
    const newIngredientName = 'Salsa'
    const newIngredientPrice = 2
    const newIngredientAvailability = true

    //Act
    const ingredient = new Ingredient({
        name: newIngredientName,
        price: newIngredientPrice,
        available: newIngredientAvailability
    })

    //Assert
    expect(ingredient).toBeInstanceOf(Ingredient)
    expect(ingredient.getName).toEqual(newIngredientName)
    expect(ingredient.getPrice).toEqual(newIngredientPrice)
    expect(ingredient.getAvailability).toEqual(newIngredientAvailability)
})