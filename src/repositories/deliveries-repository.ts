import { Delivery } from "../entities/delivery/delivery"

export interface DeliveriesRepository {
    create(delivery: Delivery): Promise<void>

    findOverlappingDelivery(orderedAt: Date, deliveredAt: Date): Promise<Delivery | null>
}