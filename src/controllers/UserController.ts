import { Controller, POST, GET } from  '@fastify-resty/core'
import { FastifyReply, FastifyRequest } from 'fastify';
import { User, UserProps } from '../entities/user/user';
import { UserAgent } from '../agents/UserAgent';

@Controller('/user')
export default class UserController {

	@POST('/') //Create New User
	async create(
		request: FastifyRequest<
		{ Body: 
			{ name: string; 
			  address: string, 
			  phone: string, 
			  email?: string 
			} 
		}
		>, reply: FastifyReply) {
			const { name, address, phone, email } = request.body
			const userRequestProps: UserProps = {
				name: name,
				address: address,
				phone: phone,
				email: email,
				favoriteDishes: []
			} 
			//Creates an User object based on the props received
			const user = new User(userRequestProps)
			//Instantiate the UserAgent class
			const userAgent = new UserAgent()
			/*Use the createUser method from userAgent instance, which creates 
			a new userModel and saves it in the database*/ 
			const createdUser = await userAgent.createUser(user)
			//Set response status to 200 and send created user as response
			reply.send(createdUser)
	}

	@GET('/all')
	async get(request: FastifyRequest, reply: FastifyReply): Promise<User[] | void> {
		const userAgent = new UserAgent()
		const allUsers: User[] = await userAgent.getAllUsers()
		reply.send(allUsers)
	}

	@GET('/one')
	async getUser(request: FastifyRequest<{Querystring: {userId: string}}>, reply: FastifyReply): Promise<User | void> {
		const { userId } = request.query
		const userAgent = new UserAgent();
		let requestedUser: User | void
		try {
			requestedUser = await userAgent.getUser(userId)
		} catch(err) {
			console.log(err)
		}

		if(requestedUser) {
			reply.send(requestedUser)
		}
	}
}