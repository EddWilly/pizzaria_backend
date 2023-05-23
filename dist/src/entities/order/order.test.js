"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const order_1 = require("./order");
const dish_1 = require("../dish/dish");
const ingredient_1 = require("../ingredient/ingredient");
const drink_1 = require("../drink/drink");
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
function mockNewDrinks() {
    //Create drink props list
    const drinksProps = [
        {
            name: "Skol 250ml",
            price: 5.60,
            available: true
        },
        {
            name: "Guaraná 250ml",
            price: 7.60,
            available: true
        },
    ];
    const drinks = [];
    drinksProps.map((drinkProps) => {
        const newDrink = new drink_1.Drink(drinkProps);
        drinks.push(newDrink);
    });
    return drinks;
}
(0, vitest_1.test)('Create an order', () => {
    //Arrange
    const newOrderOrderedAt = new Date();
    const newOrderPrice = 75.70;
    const newOrderCustomer = "Roberto Paiva";
    const newOrderAddress = "Rua Nova n°75";
    const newOrderOrderedDishes = mockNewDishes();
    const newOrderOrderedDrinks = mockNewDrinks();
    const newOrder = {
        orderedAt: newOrderOrderedAt,
        price: newOrderPrice,
        customer: newOrderCustomer,
        address: newOrderAddress,
        orderedDishes: newOrderOrderedDishes,
        orderedDrinks: newOrderOrderedDrinks
    };
    //Act
    const order = new order_1.Order(newOrder);
    //Assert
    (0, vitest_1.expect)(order).toBeInstanceOf(order_1.Order);
    (0, vitest_1.expect)(order.getOrderedAt).toEqual(newOrderOrderedAt);
    (0, vitest_1.expect)(order.getPrice).toEqual(newOrderPrice);
    (0, vitest_1.expect)(order.getCustomer).toEqual(newOrderCustomer);
    (0, vitest_1.expect)(order.getAddress).toEqual(newOrderAddress);
});
