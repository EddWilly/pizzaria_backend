"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const delivery_1 = require("./delivery");
const order_1 = require("../order/order");
const dish_1 = require("../dish/dish");
const drink_1 = require("../drink/drink");
const ingredient_1 = require("../ingredient/ingredient");
function mockNewOrderData() {
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
    const defaultDishIgredients = [];
    ingredients.map((ingredient) => {
        const newIngredient = new ingredient_1.Ingredient(ingredient);
        defaultDishIgredients.push(newIngredient);
    });
    //Define Dish props
    const defaultDishProps = {
        name: "4 Queijos",
        price: 40.50,
        ingredients: defaultDishIgredients,
    };
    //Define Drink props
    const defaultDrinkProps = {
        name: "Guaraná 1L",
        price: 7.50,
        available: true
    };
    //Instantiate new Dish and new Drink
    const defaultDish = new dish_1.Dish(defaultDishProps);
    const defaultDrink = new drink_1.Drink(defaultDrinkProps);
    const defaultDishArray = [defaultDish];
    const defaultDrinkArray = [defaultDrink];
    const defaultOrderProps = {
        orderedAt: new Date,
        price: 64.50,
        customer: "Jean Carlos",
        address: "Rua da Estrela n°23",
        orderedDishes: defaultDishArray,
        orderedDrinks: defaultDrinkArray
    };
    const defaultOrder = new order_1.Order(defaultOrderProps);
    return defaultOrder;
}
//Data to use within tests
(0, vitest_1.test)('Create a delivery', () => {
    //Arrange
    const newDeliveryRelatedOrder = mockNewOrderData();
    const newDeliveryOrderedAt = new Date();
    const newDeliveryDeliveredAt = new Date();
    //Set delivery time to be ONE hour later to the order time
    newDeliveryDeliveredAt.setHours(new Date().getHours() + 1);
    const newDeliveryProps = {
        orderedAt: newDeliveryOrderedAt,
        deliveredAt: newDeliveryDeliveredAt,
        order: newDeliveryRelatedOrder
    };
    //Act
    const delivery = new delivery_1.Delivery(newDeliveryProps);
    //Assert
    (0, vitest_1.expect)(delivery).toBeInstanceOf(delivery_1.Delivery);
    (0, vitest_1.expect)(delivery.getOrder).toBeInstanceOf(order_1.Order);
    (0, vitest_1.expect)(delivery.getOrderedAt).toEqual(newDeliveryOrderedAt);
    (0, vitest_1.expect)(delivery.getDeliveredAt).toEqual(newDeliveryDeliveredAt);
    (0, vitest_1.expect)(delivery.getOrder).toEqual(newDeliveryRelatedOrder);
});
