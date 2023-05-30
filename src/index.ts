import fastify from 'fastify'
import * as dotenv from 'dotenv';
import { bootstrap } from '@fastify-resty/core'
import UserController from './controllers/UserController';

const server = fastify({ logger: true })
dotenv.config();

server.register(bootstrap, {
  controllers: [UserController]
})


const start = async () => {
  try {
    await server.listen({ port: 8080 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()

// server.listen({ port: 8080 }, (err, address) => {
  //     if (err) {
    //         server.log.error(err)
    //         process.exit(1)
    //       }
    //       console.log(`Server listening at ${address}`)
    
    
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
      
// })