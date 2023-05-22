export interface IngredientProps {
	name: string,
	price: number,
	available: boolean
}

export class Ingredient {
	private props: IngredientProps

	get getName (): string {
		return this.props.name
	}

	get getPrice (): number {
		return this.props.price
	}

	get getAvailability (): boolean {
		return this.props.available
	}

	set setName (name: string) {
		this.props.name = name;
	}

	set setPrice (price: number) {
		this.props.price = price;
	}

	set setAvailability (available: boolean) {
		this.props.available = available;
	}

	constructor(props: IngredientProps) {
		this.props = props
	}
}