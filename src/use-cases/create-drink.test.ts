import { describe, expect, it } from "vitest"
import { CreateDrink } from './create-drink'
import { Drink } from "../entities/drink/drink"

describe('Create Drink', () => {
    it("should be able to create a new drink", async () => {
        //Arrange
        const newDrinkName = "Soda Limonada"
        const newDrinkPrice = 10.50
        const newDrinkAvailability = true

        const newDrinkProps = {
            name: newDrinkName,
            price: newDrinkPrice,
            available: newDrinkAvailability
        }

        //Act
        const sut = new CreateDrink //sut = System Under Test
        const createdDrinkPromise = sut.execute(newDrinkProps) //Keep this a promise for learning purposes
        const createdDrink = await createdDrinkPromise //Await promise resolves to get object

        //Assert
        expect(createdDrinkPromise).resolves.toBeInstanceOf(Drink)
        expect(createdDrink.getName).toEqual(newDrinkName)
        expect(createdDrink.getPrice).toEqual(newDrinkPrice)
        expect(createdDrink.getAvailability).toEqual(newDrinkAvailability)
    })
})