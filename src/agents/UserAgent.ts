import { User } from "../entities/user/user";
import { dataSource } from "../repositories/databaseConfig";
import { UserModel, UserModelProps } from "../repositories/models/UserModel";
import { UserMapper } from "../mappers/userMapper"

/*This class is responsible for interactions with
  the database that are related to User entity */
export class UserAgent {

    private users: User[];
	
	constructor() {
		this.users = [];
	}

    async createUser(user: User): Promise<UserModel | void> {
		const userMapper = new UserMapper()
        const mappedUserEntity: UserModel = await userMapper.MapUserClassToUserEntity(user)
		try {
            const userRepository = dataSource.getRepository(UserModel)
			const savedUser = await userRepository.save(mappedUserEntity)
			return savedUser
		} catch (err) {
			console.log(err)
		}

	}
}