import { describe, expect, it } from "vitest"
import { CreateDish } from "./create-dish"
import { Dish } from "../entities/prato/dish"

describe('Create Dish', () => {
    it("should be able to create a new dish", async () => {
        //Arrange
        const newDishProps = {
            name: 'Frango com Catupiury',
            price: 35.50,
            ingredientsIds: [2, 4, 9, 23, 12]
        }
        
        //Act
        const sut = new CreateDish() //sut = System Under Test
        const createdDish = await sut.execute(newDishProps)

        //Assert
        expect(createdDish).toBeInstanceOf(Dish)
        expect(createdDish.getName).toEqual(newDishProps.name)
        expect(createdDish.getPrice).toEqual(newDishProps.price)
        expect(createdDish.getIngredients).toEqual(newDishProps.ingredientsIds)
    })
})