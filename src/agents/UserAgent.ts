import { User } from "../entities/user/user";
import { dataSource } from "../repositories/databaseConfig";
import { UserModel } from "../repositories/models/UserModel";
import { UserMapper } from "../mappers/userMapper"

/*This class is responsible for interactions with
  the database that are related to User entity */
export class UserAgent {

	private repository = dataSource.getRepository(UserModel)
	private mapper: UserMapper

	constructor() {
		this.mapper = new UserMapper()
	}

	async createUser(user: User): Promise<User | void> {
		const mappedUserEntity: UserModel = await this.mapper.MapUserClassToUserEntity(user)
		try {
			const savedUser = await this.repository.save(mappedUserEntity)
			const mappedUserClassObject = await this.mapper.MapUserEntityToUserClass(savedUser)
			return mappedUserClassObject
		} catch (err) {
			console.log(err)
		}

	}

	async getAllUsers(): Promise<User[]> {
		const allUsersOnDatabase = await this.repository.find()
		const mappedUserArray: User[] = []
		try {
			allUsersOnDatabase.forEach(async userModel => {
				const mappedUserClassObject = await this.mapper.MapUserEntityToUserClass(userModel)
				mappedUserArray.push(mappedUserClassObject)
			});
			return mappedUserArray
		} catch (err) {
			console.log(err)
		}

		return mappedUserArray
	}

	async getUser(userId: string): Promise<User | void> {
		const requestedUser = await this.repository.findOneBy({ id: userId })
		if(requestedUser){
			const mappedUserClassObject = await this.mapper.MapUserEntityToUserClass(requestedUser)
			return mappedUserClassObject
		}
	}
}