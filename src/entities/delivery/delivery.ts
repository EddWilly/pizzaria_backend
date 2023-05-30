import { Order } from "../order/order"

interface DeliveryProps {
	orderedAt: Date,
	deliveredAt: Date,
	order: Order,
}

export class Delivery {
	private props: DeliveryProps
    children: any

	get getOrderedAt (): Date {
		return this.props.orderedAt
	}

	get getDeliveredAt (): Date {
		return this.props.deliveredAt
	}

	get getOrder (): Order {
		return this.props.order
	}

	set setOrderedAt (orderedAt: Date) {
		this.props.orderedAt = orderedAt
	}

	set setDeliveredAt (deliveredAt: Date) {
		this.props.deliveredAt = deliveredAt
	}

	set setAddress (order: Order) {
		this.props.order = order
	}

	constructor(props: DeliveryProps) {
		const { orderedAt, deliveredAt } = props

		if(deliveredAt <= orderedAt) {
			throw new Error('Invalid deliver date')
		}

		this.props = props
	}
}