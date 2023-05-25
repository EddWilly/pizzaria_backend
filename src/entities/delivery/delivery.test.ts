import { test, expect } from 'vitest'
import { Delivery } from './delivery'
import { Order } from '../order/order'
import { OrderMocks } from '../../mocks/order-mocks'

//Data to use within tests


test('Create a delivery', () => {
	//Arrange
	const orderMocker = new OrderMocks
	const newDeliveryRelatedOrder = orderMocker.mockOrder()
	const newDeliveryOrderedAt = newDeliveryRelatedOrder.getOrderedAt
	const newDeliveryDeliveredAt = new Date()
	//Set delivery time to be ONE hour later to the order time
	newDeliveryDeliveredAt.setHours(new Date().getHours() + 1)

	const newDeliveryProps = {
		orderedAt: newDeliveryOrderedAt,
		deliveredAt: newDeliveryDeliveredAt,
		order: newDeliveryRelatedOrder
	}

	//Act
	const delivery = new Delivery(newDeliveryProps)

	//Assert
	expect(delivery).toBeInstanceOf(Delivery)
	expect(delivery.getOrder).toBeInstanceOf(Order)
	expect(delivery.getOrderedAt).toEqual(newDeliveryOrderedAt)
	expect(delivery.getDeliveredAt).toEqual(newDeliveryDeliveredAt)
	expect(delivery.getOrder).toEqual(newDeliveryRelatedOrder)
})