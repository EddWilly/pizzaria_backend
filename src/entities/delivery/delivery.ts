interface DeliveryProps {
    deliveredAt: Date,
    address: string,
}

export class Delivery {
    private props: DeliveryProps

    get getDeliveredAt (): Date {
        return this.props.deliveredAt
    }

    get getAddress (): string {
        return this.props.address
    }

    set setDeliveredAt (deliveredAt: Date) {
        this.props.deliveredAt = deliveredAt
    }

    set setAddress (deliveryAddress: string) {
        this.props.address = deliveryAddress
    }

    constructor(props: DeliveryProps) {
        this.props = props
    }
}