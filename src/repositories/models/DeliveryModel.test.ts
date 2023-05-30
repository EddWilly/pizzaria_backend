import { it, expect } from "vitest"
import { DeliveryModel, DeliveryModelProps } from "./DeliveryModel"

it('Should be able to create a new DeliveryModel object and use setAll method', () => {
	//Arrange
	const deliveryModelProps: DeliveryModelProps = {
		orderedAt: "20/12/2023:03:30:23",
		deliveredAt: "20/12/2023:04:10:14",
		orderId: 24455,
	}
	//Act
	const delivery: DeliveryModel = new DeliveryModel()
	delivery.setAll(deliveryModelProps)
	//Assert
	expect(delivery).toBeInstanceOf(DeliveryModel)
	expect(delivery.orderedAt).toEqual(deliveryModelProps.orderedAt)
	expect(delivery.deliveredAt).toEqual(deliveryModelProps.deliveredAt)
	expect(delivery.orderId).toEqual(deliveryModelProps.orderId)
})
