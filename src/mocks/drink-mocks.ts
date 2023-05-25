import { Drink, DrinkProps } from "../entities/drink/drink";

export class DrinkMocks {
	mockDrink(): Drink {
		const drinkProps: DrinkProps = {
			name: "Guaraná 1L",
			price: 7.50,
			available: true
		}

		const drink = new Drink(drinkProps)
		return drink
	}

	mockManyDrinks(): Drink[] {
		const drinksProps: DrinkProps[] = 
		[
			{
				name: "Guaraná 1L",
				price: 7.50,
				available: true
			},
			{
				name: "Coca-cola 1L",
				price: 9,
				available: true
			}, 
			{
				name: "Pepsi 1L",
				price: 8.50,
				available: true
			},  
		]

		const manyDrinks: Drink[] = [] 

		drinksProps.map((drinkProps) => {
			manyDrinks.push(new Drink(drinkProps))
		})

		return manyDrinks
	}
}