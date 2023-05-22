import { it, describe, expect } from 'vitest'
import { CreateOrder } from './create-order'
import { Order } from '../entities/order/order'
import { Dish, DishProps } from '../entities/dish/dish'
import { Drink, DrinkProps } from '../entities/drink/drink'
import { Ingredient, IngredientProps } from '../entities/ingredient/ingredient'
import { OrdersRepository } from '../repositories/orders-repository'

describe('Create a new order', () => {
    it("Should be able to create a new order", async () => {
        //Arrange
        const newOrderOrderedAt = new Date()
        const newOrderPrice = 75.50
        const newOrderCustomer = "Zé da Manga"
        const newOrderAddress = "Rua da Manga, Pé de Manga"
        const newOrderOrderedDishes = mockNewDishes()
        const newOrderOrderedDrinks = mockNewDrinks()

        const newOrderProps = {
            orderedAt: newOrderOrderedAt,
            price: newOrderPrice, 
            customer: newOrderCustomer,
            address: newOrderAddress,
            orderedDishes: newOrderOrderedDishes,
            orderedDrinks: newOrderOrderedDrinks
        }
        class ordersRepository implements OrdersRepository {
            async create(order: Order): Promise<void> {
                
            }
        }
        const orderRepository = new ordersRepository
        //Act
        const sut = new CreateOrder(orderRepository) //sut = System Under Test
        const createdOrder = await sut.execute(newOrderProps)

        //Assert
        expect(createdOrder).toBeInstanceOf(Order)
        expect(createdOrder.getOrderedAt).toEqual(newOrderOrderedAt)
        expect(createdOrder.getPrice).toEqual(newOrderPrice)
        expect(createdOrder.getCustomer).toEqual(newOrderCustomer)
        expect(createdOrder.getAddress).toEqual(newOrderAddress)
    })
    
    function mockIngredients (): Ingredient[] {
        //Create ingredients props list
            const ingredients: IngredientProps[] = [{
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
            },]
        
            const dishIngredients: Ingredient[] = []
        
            ingredients.map((ingredientProps) => {
                //For each ingredientProps in ingredients, create a new ingredient using the current ingredientProp
                const newIngredient = new Ingredient(ingredientProps)
                //Then insert the new instantiated ingretiend to the dishIngredients array
                dishIngredients.push(newIngredient)
            })
        
            return dishIngredients
    }
    
    function mockNewDishes (): Dish[] {
        
        //Create dishes Props list
        const dishes: DishProps[] = [
            {
                name: "Pizza de Calabresa",
                price: 30.45,
                ingredients: mockIngredients(),
            },
        ]
    
        const newDishes: Dish[] = []
    
        dishes.map((dishProps) => {
            const newDish = new Dish(dishProps)
            newDishes.push(newDish)
        })
    
        return newDishes
    }
    
    function mockNewDrinks (): Drink[] {
        //Create drink props list
        const drinksProps: DrinkProps[] = [
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
        ]
    
        const drinks: Drink[] = []
    
        drinksProps.map((drinkProps) => {
            const newDrink = new Drink(drinkProps)
            drinks.push(newDrink)
        })
    
        return drinks
    }

})