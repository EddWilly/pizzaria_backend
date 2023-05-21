import { test, expect } from 'vitest'
import { Delivery } from './delivery'

test('Create a delivery', () => {
    //Arrange
    const newDeliveryDeliveredAt = new Date()
    const newDeliveryAddress = "Rua nova, n°45"

    const newDeliveryProps = {
        deliveredAt: newDeliveryDeliveredAt,
        address: newDeliveryAddress
    }

    //Act
    const delivery = new Delivery(newDeliveryProps)

    //Assert
    expect(delivery).toBeInstanceOf(Delivery)
    expect(delivery.getDeliveredAt).toEqual(newDeliveryDeliveredAt)
    expect(delivery.getAddress).toEqual(newDeliveryAddress)
})