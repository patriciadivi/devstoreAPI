import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const createProducts = async (app: FastifyInstance) => {
  app.get('/products', (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send({message: 'Hello Word'})
  })
}