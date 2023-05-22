import { Delivery } from "../../entities/delivery/delivery";
import { DeliveriesRepository } from "../deliveries-repository";
import { areIntervalsOverlapping } from 'date-fns'

export class InMemoryDeliveriesRepository implements DeliveriesRepository {
	public items: Delivery [] = [] 

	async create(delivery: Delivery): Promise<void> {
		this.items.push(delivery)
	}

	async findOverlappingDelivery(orderedAt: Date, deliveredAt: Date): Promise<Delivery | null> {
		const overlappingDelivery = this.items.find(delivery => {
			return areIntervalsOverlapping(
				{ start: orderedAt, end: deliveredAt },
				{ start: delivery.getOrderedAt, end: delivery.getDeliveredAt },
				{ inclusive: true }
			)
		})

		if (!overlappingDelivery) {
			return null
		}

		return overlappingDelivery
	}
}