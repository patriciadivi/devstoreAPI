// src/server.ts
import jsonServer from "json-server";
import dotenv from "dotenv";
dotenv.config();
var server = jsonServer.create();
var router = jsonServer.router("db.json");
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.rewriter({
  "/api/*": "/$1",
  "/blog/:resource/:id/show": "/:resource/:id"
}));
server.use(router);
var PORT = process.env.PORT || 3e3;
try {
  server.listen(PORT, () => {
    console.log(`JSON Server is running on PORT ${PORT}`);
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
var server_default = server;
export {
  server_default as default
};
