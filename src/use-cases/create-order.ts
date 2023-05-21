//Todo caso de uso tem uma ENTRADA e uma SAÍDA

import { Order } from '../entities/order/order'

interface CreateOrderRequest {
    orderedAt: Date,
    price: number,
    customer: string,
    address: string,
    orderedDishes: number[],
    orderedDrinks: number[]
}

type CreateOrderResponse = Order

export class CreateOrder {
    async execute({ 
        orderedAt, 
        price, 
        customer, 
        address, 
        orderedDishes, 
        orderedDrinks 
    }: CreateOrderRequest): Promise<CreateOrderResponse> {
        const order = new Order ({
            orderedAt, 
            price,
            customer, 
            address, 
            orderedDishes, 
            orderedDrinks
        })

        return order
    }
}