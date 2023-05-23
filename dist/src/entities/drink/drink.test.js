"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const drink_1 = require("./drink");
(0, vitest_1.test)('Create a drink', () => {
    //Arrange
    const newDrinkName = "Refrigerante Soda 2l";
    const newDrinkPrice = 10.50;
    const newDrinkAvailability = false;
    //Act
    const drink = new drink_1.Drink({
        name: newDrinkName,
        price: newDrinkPrice,
        available: newDrinkAvailability
    });
    //Assert
    (0, vitest_1.expect)(drink).toBeInstanceOf(drink_1.Drink);
    (0, vitest_1.expect)(drink.getName).toEqual(newDrinkName);
    (0, vitest_1.expect)(drink.getPrice).toEqual(newDrinkPrice);
    (0, vitest_1.expect)(drink.getAvailability).toEqual(newDrinkAvailability);
});
