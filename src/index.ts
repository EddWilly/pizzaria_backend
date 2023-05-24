import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import * as dotenv from 'dotenv';
import { User, UserProps } from './entities/user/user';
import { UserMapper } from './mappers/userMapper';

const server = fastify()
dotenv.config();

interface IQuerystring {
    username: string;
    password: string;
}

interface IHeaders {
    'h-Custom': string;
}

server.get<{
    Querystring: IQuerystring,
    Headers: IHeaders
  }>('/auth', async (request, reply) => {
    const { username, password } = request.query
    const customerHeader = request.headers['h-Custom']
    // do something with request data
  
    return `logged in!`
  })
  
server.post('/user', async (
  request: FastifyRequest<{ Body: { name: string; address: string, phone: string, email?: string } }>, 
  reply: FastifyReply) => {

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
  //Instantiate the UserManager class
  const userManager = new UserMapper()
  /*Use the createUser method from userManager instance, which creates 
  a new userModel and saves it in the database*/ 
  const createdUser = await userManager.createUser(user)
  //Set response status to 200 and send created user as response
  reply.send(createdUser)
  reply.status(200)
})

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`)
})