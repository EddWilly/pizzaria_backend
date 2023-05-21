interface OrderProps {
    orderedAt: Date,
    price: number,
    customer: string,
    address: string,
}

export class Order {
    private props: OrderProps

    get getOrderedAt () {
        return this.props.orderedAt
    }

    get getPrice () {
        return this.props.price
    }

    get getCustomer () {
        return this.props.customer
    }

    get getAddress () {
        return this.props.address
    }

    set setOrderedAt (orderedAt: Date) {
        this.props.orderedAt = orderedAt
    }

    set setPrice (price: number) {
        this.props.price = price
    }

    set setCustomer (customer: string) {
        this.props.customer = customer
    }

    set setAddress (address: string) {
        this.props.address = address
    }

    constructor(props: OrderProps) {
        this.props = props
    }
}