import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export interface DeliveryModelProps {
    orderedAt: string,
	deliveredAt: string,
	orderId: string,
}

@Entity("delivery")
export class DeliveryModel {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'varchar' })
    orderedAt!: string

    @Column({ type: 'varchar' })
    deliveredAt!: string

    @Column({ type: 'varchar' })
    orderId!: number

    setAll(deliveryProps: DeliveryModelProps) {
		const { orderedAt, deliveredAt, orderId } = deliveryProps
		this.orderedAt = orderedAt
		this.deliveredAt = deliveredAt
		this.orderId = +orderId
	}
}
