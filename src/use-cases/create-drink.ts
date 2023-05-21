//Todo caso de uso tem uma ENTRADA e uma SAÍDA

import { Drink } from "../entities/drink/drink"

interface CreateDrinkRequest {
    name: string,
    price: number,
    available: boolean
}

type CreateDrinkResponse = Drink

export class CreateDrink {
    async execute({ name, price, available }: CreateDrinkRequest): Promise<CreateDrinkResponse> {
        const drink = new Drink({
            name, price, available
        })

        return drink
    }
}