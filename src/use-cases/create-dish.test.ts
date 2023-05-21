import { describe, expect, it } from "vitest"
import { CreateDish } from "./create-dish"
import { Dish } from "../entities/dish/dish"

describe('Create Dish', () => {
    it("should be able to create a new dish", async () => {
        //Arrange
        const newDishName = "Frango com Catupiry"
        const newDishPrice = 35.45
        const newDishIngredients = [2, 4, 9, 23, 12]

        const newDishProps = {
            name: newDishName,
            price: newDishPrice,
            ingredientsIds: newDishIngredients
        }
        
        //Act
        const sut = new CreateDish() //sut = System Under Test
        const createdDish = await sut.execute(newDishProps)

        //Assert
        expect(createdDish).toBeInstanceOf(Dish)
        expect(createdDish.getName).toEqual(newDishName)
        expect(createdDish.getPrice).toEqual(newDishPrice)
        expect(createdDish.getIngredients).toEqual(newDishIngredients)
    })
})