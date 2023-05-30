import { User, UserProps } from "../entities/user/user";
import { UserModel, UserModelProps } from "../repositories/models/UserModel";
import { Dish } from "../entities/dish/dish";

export class UserMapper {

	//Move to a new Dish mapper class
	MapFavoriteDishesArrayToString(favoriteDishes: Dish[]): string {
		let favoriteDishesString: string

		const favDishes: string[] = favoriteDishes.map((favDish) => {
			if(typeof(favDish.getId) === 'string') {
				return favDish.getId
			} else {
				return ''
			}
		})

		favoriteDishesString = favDishes.toString()

		return favoriteDishesString
	}

	//Move to a new Dish mapper class
	MapFavoriteDishesStringToArray(favoriteDishes: string): Dish[] {
		let favoriteDishesArray: Array<Dish> = []

		const favoriteDishesSplitedByComma: string[] = favoriteDishes.split(',')
		favoriteDishesSplitedByComma.map((favDish) => {
			//forEach favDish, search it on database and return
		})
		return favoriteDishesArray
	}

	async MapUserClassToUserEntity(user: User): Promise<UserModel> {
		const { getName, getAddress, getPhone, getEmail, getFavoriteDishes } = user
		let favoriteDishesString: string = ''
	
		if(getFavoriteDishes.length > 0) {
			favoriteDishesString = this.MapFavoriteDishesArrayToString(getFavoriteDishes)
		}
		const userModelProps: UserModelProps = {
			name: getName,
			address: getAddress,
			phone: getPhone,
			email: getEmail,
			favoriteDishes: favoriteDishesString
		}

		const mappedUserEntity = new UserModel
		mappedUserEntity.setAll(userModelProps)
		
		return mappedUserEntity
	}

	async MapUserEntityToUserClass(user: UserModel): Promise<User> {
		const { id, name, address, phone, email, favoriteDishes } = user
		if(favoriteDishes !== null) {

			const favoriteDishesArray = favoriteDishes.split(',')
			//Populate favDishArray with every favorite dish retrieved on the map method
			const favDishArray: Dish[] = []
			favoriteDishesArray.map((favDish) => {
				/*
					Each favDish represents a Dish ID.
					implement: for each favDish, get it from database
					and push it to favDishArray
				*/
			})
		}
		const userClassProps: UserProps = {
			name: name,
			address: address,
			phone: phone,
			email: email,
			favoriteDishes: []
			//favoriteDishes: favDishArray
		}

		const newUser = new User(userClassProps)
		return newUser
	}
	
	

}