interface DishProps {
    name: string,
    price: number,
    ingredientsIds: number[],
}

export class Dish {
    
    private props: DishProps

    get getName (): string {
        return this.props.name
    }

    get getPrice (): number {
        return this.props.price
    }

    get getIngredients (): number[] {
        return this.props.ingredientsIds
    }

    set setName (name: string) {
        this.props.name = name;
    }

    set setPrice (price: number) {
        this.props.price = price;
    }

    set setingredientsIds (ingredients: number[]) {
        this.props.ingredientsIds = ingredients;
    }

    constructor(props: DishProps) {
        this.props = props
    }
}