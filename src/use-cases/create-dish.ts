//Todo caso de uso tem uma ENTRADA e uma SAÍDA

import { Dish } from "../entities/prato/dish"

interface CreateDishRequest {
    name: string,
    price: number,
    ingredientsIds: number[],
}

type CreateDishResponse = Dish

export class CreateDish {
    async execute({ name, price, ingredientsIds }: CreateDishRequest): Promise<CreateDishResponse> {
        const dish = new Dish({
            name, price, ingredientsIds
        })

        return dish
    }
}