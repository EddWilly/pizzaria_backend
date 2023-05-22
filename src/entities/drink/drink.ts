export interface DrinkProps {
    name: string,
    price: number,
    available: boolean
}

export class Drink {
    private props: DrinkProps

    get getName(): string {
        return this.props.name
    }

    get getPrice(): number {
        return this.props.price
    }

    get getAvailability(): boolean {
        return this.props.available
    }

    set setName(name: string) {
        this.props.name = name
    }

    set setPrice(price: number) {
        this.props.price = price
    }

    set setAvailability(available: boolean) {
        this.props.available = available
    }

    constructor(props: DrinkProps) {
        this.props = props
    }
}