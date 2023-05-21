import {describe, expect } from 'vitest'
import { Order } from './order'

describe('Create an order', () => {
    //Arrange
    const newOrderOrderedAt = new Date()
    const newOrderPrice = 75.70
    const newOrderCustomer = "Roberto Paiva"
    const newOrderAddress = "Rua Nova n°75"

    const newOrder = {
        orderedAt: newOrderOrderedAt,
        price: newOrderPrice,
        customer: newOrderCustomer,
        address: newOrderAddress,
    }

    //Act
    const order = new Order(newOrder)

    //Assert
    expect(order).toBeInstanceOf(Order)
    expect(order.getOrderedAt).toEqual(newOrderOrderedAt)
    expect(order.getPrice).toEqual(newOrderPrice)
    expect(order.getCustomer).toEqual(newOrderCustomer)
    expect(order.getAddress).toEqual(newOrderAddress)
})