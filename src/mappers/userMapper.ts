import { User, UserProps } from "../entities/user/user";
import { UserModel, UserModelProps } from "../repositories/models/UserModel";
import { dataSource } from '../repositories/databaseConfig';
import { Dish } from "../entities/dish/dish";

export class UserMapper {
	private users: User[];
	
	constructor() {
		this.users = [];
	}

	async MapUserClassToUserEntity(user: User): Promise<UserModel> {
		const { getName, getAddress, getPhone, getEmail, getFavoriteDishes } = user
		const favoriteDishesString: string = ""
		getFavoriteDishes.map((favoriteDish) => {
			if(typeof(favoriteDish.getId) === 'string') {
				favoriteDishesString.concat(favoriteDish.getId + ',')
			}
		})

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
		const userClassProps: UserProps = {
			name: name,
			address: address,
			phone: phone,
			email: email,
			favoriteDishes: favDishArray
		}

		const newUser = new User(userClassProps)
		return newUser
	}
	
	async createUser(user: User): Promise<UserModel | void> {
		
		const { getName, getAddress, getPhone, getEmail } = user
		const userRepository = dataSource.getRepository(UserModel)
		
		const userProps: UserModelProps = {
			name: getName,
			address: getAddress,
			phone: getPhone,
			email: getEmail,
			favoriteDishes: ""
		}

		try {
			let newUser: UserModel = new UserModel();
			newUser.setAll(userProps)
			const savedUser = await userRepository.save(newUser)
			return savedUser
		} catch (err) {
			console.log(err)
		}

	}

}