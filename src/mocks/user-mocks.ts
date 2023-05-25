import { Dish } from '../entities/dish/dish'
import { User, UserProps } from '../entities/user/user'

export class UserMocks {
	mockUser(favoriteDishes?: Dish[]): User {
		const newUserName = "Daniel Stewart"
		const newUserEmail = "danielstewart@gmail.com"
		const newUserPhone = "5938582935"
		const newUserAddress = "Rua Velha, n°60"
		const newUserFavoriteDishes: Dish[] = []

		const newUserProps: UserProps = {
			name: newUserName,
			address: newUserAddress,
			phone: newUserPhone,
			email: newUserEmail,
			favoriteDishes: (favoriteDishes ? favoriteDishes : newUserFavoriteDishes)
		}
		
		const user = new User(newUserProps)
		return user
	}

	mockManyUsers(): User[] {
			return [] 
	}
}
