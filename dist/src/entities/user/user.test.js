"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const user_1 = require("./user");
const dish_1 = require("../dish/dish");
const ingredient_1 = require("../ingredient/ingredient");
(0, vitest_1.test)('Create an user', () => {
    //Arrange
    const newUserName = "Daniel Stewart";
    const newUserEmail = "danielstewart@gmail.com";
    const newUserPhone = "5938582935";
    const newUserAddress = "Rua Velha, n°60";
    const newUserFavoriteDishes = mockNewDishes();
    const newUserProps = {
        name: newUserName,
        address: newUserAddress,
        phone: newUserPhone,
        email: newUserEmail,
        favoriteDishes: newUserFavoriteDishes
    };
    //Act
    const user = new user_1.User(newUserProps);
    //Assert
    (0, vitest_1.expect)(user).toBeInstanceOf(user_1.User);
    (0, vitest_1.expect)(user.getName).toEqual(newUserName);
    (0, vitest_1.expect)(user.getAddress).toEqual(newUserAddress);
    (0, vitest_1.expect)(user.getPhone).toEqual(newUserPhone);
    (0, vitest_1.expect)(user.getEmail).toEqual(newUserEmail);
    (0, vitest_1.expect)(user.getFavoriteDishes).toEqual(newUserFavoriteDishes);
});
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
function mockNewDishes() {
    //Create dishes Props list
    const dishes = [
        {
            name: "Pizza de Calabresa",
            price: 30.45,
            ingredients: mockIngredients(),
        },
    ];
    const newDishes = [];
    dishes.map((dishProps) => {
        const newDish = new dish_1.Dish(dishProps);
        newDishes.push(newDish);
    });
    return newDishes;
}
