import { Ingredient } from "../ingredient/ingredient";

export interface DishProps {
    name: string,
    price: number,
    ingredients: Ingredient[],
}

export class Dish {
    
    private props: DishProps

    get getName (): string {
        return this.props.name
    }

    get getPrice (): number {
        return this.props.price
    }

    get getIngredients (): Ingredient[] {
        return this.props.ingredients
    }

    set setName (name: string) {
        this.props.name = name;
    }

    set setPrice (price: number) {
        this.props.price = price;
    }

    set setingredientsIds (ingredients: Ingredient[]) {
        this.props.ingredients = ingredients;
    }

    constructor(props: DishProps) {
        this.props = props
    }
}