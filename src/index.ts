import fastify from 'fastify'
import * as dotenv from 'dotenv';
import { User } from './repositories/models/User';
import { dataSource as database } from './repositories/databaseConfig';

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

server.get('/user', async (request, reply) => {
  if(database.isInitialized) {
    const user = new User()
    user.address = '123'
    user.email = '123'
    user.favoriteDishes = "1,2,3"
    user.name = "123"
    user.phone = "123"
    const newUser = await database.manager.save(user)
    return newUser
  } else {
    database.initialize().then(async () => {
      const user = new User()
      user.address = '123'
      user.email = '123'
      user.favoriteDishes = "1,2,3"
      user.name = "123"
      user.phone = "123"
      const newUser = await database.manager.save(user)
      return newUser
    }).catch(error => console.log(error))
  }
 
})

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`)
})