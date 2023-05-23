"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ingredient_1 = require("./ingredient");
(0, vitest_1.test)('Create an ingredient', () => {
    //Arrange
    const newIngredientName = 'Salsa';
    const newIngredientPrice = 2;
    const newIngredientAvailability = true;
    //Act
    const ingredient = new ingredient_1.Ingredient({
        name: newIngredientName,
        price: newIngredientPrice,
        available: newIngredientAvailability
    });
    //Assert
    (0, vitest_1.expect)(ingredient).toBeInstanceOf(ingredient_1.Ingredient);
    (0, vitest_1.expect)(ingredient.getName).toEqual(newIngredientName);
    (0, vitest_1.expect)(ingredient.getPrice).toEqual(newIngredientPrice);
    (0, vitest_1.expect)(ingredient.getAvailability).toEqual(newIngredientAvailability);
});
