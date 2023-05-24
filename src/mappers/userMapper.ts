import { User, UserProps } from "../entities/user/user";
import { UserModel, UserModelProps } from "../repositories/models/UserModel";
import { dataSource } from '../repositories/databaseConfig';

export class UserMapper {
	private users: User[];
	
	constructor() {
		this.users = [];
	}
	
	async createUser(user: User): Promise<void> {
		
		const { getName, getAddress, getPhone, getEmail } = user
		const userRepository = dataSource.getRepository(UserModel)
		
		const userProps: UserModelProps = {
			name: getName,
			address: getAddress,
			phone: getPhone,
			email: getEmail,
			favoriteDishes: []
		}

		try {
			let newUser: UserModel = new UserModel();
			newUser.name = getName
			newUser.address = getAddress
			newUser.phone = getPhone
			newUser.email = getEmail
			const savedUser = await userRepository.save(newUser)
			console.log(savedUser)
		} catch (err) {
			console.log(err)
		}
				
		

		
		

		let newUserRegistered: User
		
		// try {
		// 	if(dataSource.isInitialized) {
		// 		newUserRegistered = await dataSource.manager.save(user)
		// 	} else {
		// 		dataSource.initialize().then(async () => {
		// 			newUserRegistered = await dataSource.manager.save(user)
		// 		}).catch(error => console.log(error))
		// 	}
		// } catch (err) {
		// 	console.log(err)
		// }
		
		//return (newUserRegistered ? newUserRegistered : null)
	}

}