// src/server.ts
import fastify from "fastify";
var app = fastify();
app.listen({
  host: "0.0.0.0",
  port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
