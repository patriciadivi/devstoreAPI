
import { productsRoutes } from "./routes/products/@productsRoutes"
import { app } from "./server"

export const routes = async () => {
  app.register(productsRoutes)
}