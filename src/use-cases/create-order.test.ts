import { it, describe, expect } from 'vitest'
import { CreateOrder } from './create-order'
import { Order } from '../entities/order/order'

describe('Create a new order', () => {
    it("Should be able to create a new order", async () => {
        //Arrange
        const newOrderOrderedAt = new Date()
        const newOrderPrice = 75.50
        const newOrderCustomer = "Zé da Manga"
        const newOrderAddress = "Rua da Manga, Pé de Manga"
        const newOrderOrderedDishes = [3, 9, 12, 11]
        const newOrderOrderedDrinks = [ 2, 9, 3]

        const newOrderProps = {
            orderedAt: newOrderOrderedAt,
            price: newOrderPrice, 
            customer: newOrderCustomer,
            address: newOrderAddress,
            orderedDishes: newOrderOrderedDishes,
            orderedDrinks: newOrderOrderedDrinks
        }

        //Act
        const sut = new CreateOrder() //sut = System Under Test
        const createdOrder = await sut.execute(newOrderProps)

        //Assert
        expect(createdOrder).toBeInstanceOf(Order)
        expect(createdOrder.getOrderedAt).toEqual(newOrderOrderedAt)
        expect(createdOrder.getPrice).toEqual(newOrderPrice)
        expect(createdOrder.getCustomer).toEqual(newOrderCustomer)
        expect(createdOrder.getAddress).toEqual(newOrderAddress)
    })
    

})