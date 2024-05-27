import { app } from "../../server"
import { createProducts } from "./createProducts"

export const productsRoutes = async () => {
  app.register(createProducts)
}