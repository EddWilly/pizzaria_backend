import { expect, test } from 'vitest'
import { Dish } from './dish'

test('Create a dish', () => {
    //Arrange
    const newDishName = 'Maria Bonita'
    const newDishPrice = 32.30
    const newDishIgredientsIds = [2, 4, 1, 10, 12, 22, 8]

    //Act
    const dish = new Dish({
        name: newDishName,
        price: newDishPrice,
        ingredientsIds: newDishIgredientsIds
    })

    //Assert
    expect(dish).toBeInstanceOf(Dish)
    expect(dish.getName).toEqual(newDishName)
    expect(dish.getPrice).toEqual(newDishPrice)
    expect(dish.getIngredients).toEqual(newDishIgredientsIds)
})