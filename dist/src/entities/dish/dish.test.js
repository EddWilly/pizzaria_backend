"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const dish_1 = require("./dish");
const ingredient_1 = require("../ingredient/ingredient");
function mockIngredients() {
    //Create ingredients props list
    const ingredients = [{
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
        },];
    const dishIngredients = [];
    ingredients.map((ingredientProps) => {
        //For each ingredientProps in ingredients, create a new ingredient using the current ingredientProp
        const newIngredient = new ingredient_1.Ingredient(ingredientProps);
        //Then insert the new instantiated ingretiend to the dishIngredients array
        dishIngredients.push(newIngredient);
    });
    return dishIngredients;
}
(0, vitest_1.test)('Create a dish', () => {
    //Arrange
    const newDishName = 'Maria Bonita';
    const newDishPrice = 32.30;
    const newDishIgredients = mockIngredients();
    //Act
    const dish = new dish_1.Dish({
        name: newDishName,
        price: newDishPrice,
        ingredients: newDishIgredients
    });
    //Assert
    (0, vitest_1.expect)(dish).toBeInstanceOf(dish_1.Dish);
    (0, vitest_1.expect)(dish.getName).toEqual(newDishName);
    (0, vitest_1.expect)(dish.getPrice).toEqual(newDishPrice);
    (0, vitest_1.expect)(dish.getIngredients).toEqual(newDishIgredients);
});
