"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const create_order_1 = require("./create-order");
const order_1 = require("../entities/order/order");
const dish_1 = require("../entities/dish/dish");
const drink_1 = require("../entities/drink/drink");
const ingredient_1 = require("../entities/ingredient/ingredient");
(0, vitest_1.describe)('Create a new order', () => {
    (0, vitest_1.it)("Should be able to create a new order", () => __awaiter(void 0, void 0, void 0, function* () {
        //Arrange
        const newOrderOrderedAt = new Date();
        const newOrderPrice = 75.50;
        const newOrderCustomer = "Zé da Manga";
        const newOrderAddress = "Rua da Manga, Pé de Manga";
        const newOrderOrderedDishes = mockNewDishes();
        const newOrderOrderedDrinks = mockNewDrinks();
        const newOrderProps = {
            orderedAt: newOrderOrderedAt,
            price: newOrderPrice,
            customer: newOrderCustomer,
            address: newOrderAddress,
            orderedDishes: newOrderOrderedDishes,
            orderedDrinks: newOrderOrderedDrinks
        };
        class ordersRepository {
            create(order) {
                return __awaiter(this, void 0, void 0, function* () {
                });
            }
        }
        const orderRepository = new ordersRepository;
        //Act
        const sut = new create_order_1.CreateOrder(orderRepository); //sut = System Under Test
        const createdOrder = yield sut.execute(newOrderProps);
        //Assert
        (0, vitest_1.expect)(createdOrder).toBeInstanceOf(order_1.Order);
        (0, vitest_1.expect)(createdOrder.getOrderedAt).toEqual(newOrderOrderedAt);
        (0, vitest_1.expect)(createdOrder.getPrice).toEqual(newOrderPrice);
        (0, vitest_1.expect)(createdOrder.getCustomer).toEqual(newOrderCustomer);
        (0, vitest_1.expect)(createdOrder.getAddress).toEqual(newOrderAddress);
    }));
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
});
