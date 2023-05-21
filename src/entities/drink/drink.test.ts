import { test, expect } from 'vitest'
import { Drink } from './drink'

test('Create a drink', () => {
    //Arrange

    const newDrinkName = "Refrigerante Soda 2l"
    const newDrinkPrice = 10.50
    const newDrinkAvailability = false

    //Act
    const drink = new Drink({
        name: newDrinkName,
        price: newDrinkPrice,
        available: newDrinkAvailability
    })

    //Assert
    expect(drink).toBeInstanceOf(Drink)
    expect(drink.getName).toEqual(newDrinkName)
    expect(drink.getPrice).toEqual(newDrinkPrice)
    expect(drink.getAvailability).toEqual(newDrinkAvailability)
})