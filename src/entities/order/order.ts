import { Dish } from "../dish/dish"
import { Drink } from "../drink/drink"

interface OrderProps {
	orderedAt: Date,
	price: number,
	customer: string,
	address: string,
	orderedDishes: Dish[],
	orderedDrinks: Drink[]
}

export class Order {
	private props: OrderProps

	get getOrderedAt (): Date {
		return this.props.orderedAt
	}

	get getPrice (): number {
		return this.props.price
	}

	get getCustomer (): string {
		return this.props.customer
	}

	get getAddress (): string {
		return this.props.address
	}

	get getOrderedDishes (): Dish[] {
		return this.props.orderedDishes
	}

	get getOrderedDrinks (): Drink[] {
		return this.props.orderedDrinks
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

	set setOrderedDishes (orderedDishes: Dish[]) {
		this.props.orderedDishes = orderedDishes
	}

	set setOrderedDrinks (orderedDrinks: Drink[]) {
		this.props.orderedDrinks = orderedDrinks
	}

	constructor(props: OrderProps) {
		this.props = props
	}
}