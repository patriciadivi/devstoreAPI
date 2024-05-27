import fastify from "fastify";

import fastifyCors from "@fastify/cors";
import { routes } from "./routes";

export const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(routes)

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
  console.log('HTTP server running!')
})