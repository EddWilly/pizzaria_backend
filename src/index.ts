import fastify from 'fastify'
import dotenv from 'dotenv'

const server = fastify()

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

server.get('/pedidos', async (request, reply) => {
    return "Pong"
})

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`)
})